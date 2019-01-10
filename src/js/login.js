//登录的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery","url", "header","footer","chatfixed","cookie"], ($,url) => {
		$(function(){
			if($.cookie("user")){
				window.location.href = "/index.html";
			}
			//记住存cookie
			$(".remember-me").on("click",function(){
				if($(this).hasClass("choose")){
					$(this).removeClass("choose");
				}else{
					$(this).addClass("choose");
				}
			})
			//登录
			$("#login-btn").on("click",function(e){
				e = e || window.event;
				//用ajax提交
				$.ajax({
					type:"post",
					url:url.baseUrlPhp+"/api/v1/login.php",
					data: {
						"username": $.trim($("#user_name").val()),
						"password": $.trim($("#user_pwd").val())
					},
					dataType:"json",
					success: function(res){
						//把用户id存cookie
						if($(".remember-me").hasClass("choose")){
							$.cookie(
								"user", 
								JSON.stringify({
									id:res.res_body.id 
								}),
								{expires:7,path:"/"}
							);
						}else{
							$.cookie(
								"user", 
								JSON.stringify({
									id:res.res_body.id 
								}),
								{path:"/"}
							);
							
						}
						if(res.res_code){
							window.location.href = "/index.html";
						}
					}
				})
		
		
				//阻止表单的默认提交
				e.preventDefault();
				return false;
			})
		})
	})
})

