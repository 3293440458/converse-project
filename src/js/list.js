//列表的业务逻辑
require(["./requirejs.config"], () => {
	//引入list需要依赖的模块
	require(["jquery","item","url", "header","links","footer","chatfixed","cookie"], ($,item,url) => {
		
		$(function(){
			item.init(url.baseUrlRap+"/list");
			$(".filter-box dl").on("click","dt",function(){
				if($(this).parent().height() === 25){
					$(".filter-box dl dt").removeClass("long");
					$(this).addClass("long").parent().stop().animate({height:"233px"}).
					siblings().stop().animate({height:"25px"});
				}else{
					$(this).removeClass("long");
					$(this).parent().stop().animate({height:"25px"});
				}
			})
		})
	})
})