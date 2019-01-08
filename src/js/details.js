//注册的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery", "header","links","footer","chatfixed","cookie"], () => {
		$(function(){
			$(".share-title").on("click",function(){
				if($(".share-content").height() === 0){
					$(".share-content").stop().animate({height:"115px"});
				}else{
					$(".share-content").stop().animate({height:"0"});
				}
			})
			let arrSearch = location.search.slice(1).split("=");
		})
	})
})