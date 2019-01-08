//注册的业务逻辑
require(["./requirejs.config"], () => {
	//引入register需要依赖的模块
	require(["jquery", "header","footer","chatfixed","bgblack"], () => {
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
		$("#register-btn").on("click",function(){
			$.ajax({
				
			})
		})
	})
})



















