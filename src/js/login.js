//登录的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery", "header","footer","chatfixed"], () => {
		$(function(){
			$(".remember-me").on("click",function(){
				if($(this).hasClass("choose")){
					$(this).removeClass("choose");
				}else{
					$(this).addClass("choose");
				}
			})
		})
	})
})

