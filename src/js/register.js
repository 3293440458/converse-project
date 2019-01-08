//注册的业务逻辑
require(["./requirejs.config"], () => {
	//引入register需要依赖的模块
	require(["jquery","url", "header","footer","chatfixed"], ($,url) => {
		var regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
		var regPwd = /^.{6,}$/;
		var regPhone = /^1\d{10}$/;
		
		function judge(obj,reg){
			$(obj).on("blur",function(){
				if(reg.exec($(this).val())){
					$(this).removeClass("error");
					$(this).siblings("span").css({display:"none"});
				}else{
					$(this).addClass("error");
					$(this).siblings("span").css({display:"block"});
				}
			});
		}
		
		judge("#user_phone",regPhone);
		judge("#user_pwd",regPwd);
		judge("#user_email",regEmail);
		$("#pwd_again").on("blur",function(){
			if($(this).val() === $("#user_pwd").val()){
				$(this).removeClass("error");
				$(this).siblings("span").css({display:"none"});
			}else{
				$(this).addClass("error");
				$(this).siblings("span").css({display:"block"});
			}
		})
		//性别选择
		$(".gender").on("click",function(){
			$(this).addClass("choose").siblings().removeClass("choose");
		})
		//注册按钮
		$("#register-btn").on("click",function(e){
			e = e || window.event;
			console.log("1");
			//用ajax提交
			$.ajax({
				type:"post",
				url:url.baseUrlPhp+"/api/v1/register.php",
				data: {
					"tel": $.trim($("#user_phone").val()),
					"email": $.trim($("#user_email").val()),
					"password": $.trim($("#user_pwd").val())
				},
				dataType:"json",
				success: function(res){
					console.log(res);
					if(res.res_code){
						if(confirm("注册成功，去登录")){
							window.location.href = "login.html";
						}
					}
				}
			})
	
	
			//阻止表单的默认提交
			e.preventDefault();
			return false;
		})
	})
})



















