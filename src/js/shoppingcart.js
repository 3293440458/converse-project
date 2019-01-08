//注册的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery", "header","footer","chatfixed","bgblack"], () => {
		$(function(){
			$(".close-cule").on("click",function(){
				$(".top-cule").remove();
			})
			$("#all-check").on("click",function(){
				if($(this).hasClass("all-checked")){
					$(this).removeClass("all-checked");
				}else{
					$(this).addClass("all-checked");
				}
			})
			$(".check").on("click",function(){
				if($(this).hasClass("checked")){
					$(this).removeClass("checked");
				}else{
					$(this).addClass("checked");
				}
			})
		})
	})
})
