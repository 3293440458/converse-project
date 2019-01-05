//首页的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery", "header","links","footer"], () => {
		
	})
})

//轮播图
$(function(){
	let $li = $("#autobox ul li");
	$li.eq(0).addClass("ac").css({opacity:1});
	let len = $li.length;
	//记录下标
	let index = 0;
	//创建btn数组接受创建的btn按钮
	var btn = [];
	//根据li数量生成btn按钮
	$li.each(function(i,li){
		btn.push($("<li>").addClass(i === 0 ? "ac" : "").appendTo($("#autobox ol")));
	});
	//遍历btn数组给jQuery对象的$btn添加点击事件
	$.each(btn, function(i,$btn) {
		$btn.on("click",function(){
			//点击让上一个下标为index的li清除样式，变透明
			$li.eq(index).animate({opacity:0},1000).removeClass("ac");
			//点击的这个按钮对应的li添加样式，显形
			$li.eq(i).addClass("ac").animate({opacity:1},1000);
			//当前的$btn样式添加，清除其他$btn的样式
			$btn.addClass("ac").siblings().removeClass("ac");
			//记录当前$btn的下标，作为下一个$btn的上一个下标
			index = i;
		})
	});
	
	
	
	$("#prev").on("click",function(){
		$li.eq(index).animate({opacity:0},1000).removeClass("ac");
		btn[index].removeClass("ac");
		$li.eq(--index < 0 ? index = len-1 : index).addClass("ac").animate({opacity:1},1000);
		btn[index].addClass("ac");
	});
	
	$("#next").on("click",function(){
		$li.eq(index).animate({opacity:0},1000).removeClass("ac");
		btn[index].removeClass("ac");
		$li.eq(++index > len-1 ? index = 0 : index).addClass("ac").animate({opacity:1},1000);
		btn[index].addClass("ac");				
	});
	
	var timer ;
	function autoPlay(){
		timer = setInterval(function(){
			$("#next").trigger("click");
		},2500);
	}
	autoPlay();
	$("#autobox").hover(function(){
		clearInterval(timer);
		$("b").animate({opacity:1},1000);	
	},function(){
		$("b").animate({opacity:0},1000);
		autoPlay();
	});
})

//滑动指向
$(".bs-example").on("mouseover",function(e){
	var i = $(this).attr("data-index");
	$(".brand-menu").stop().animate({left:12+Number($(this).attr("data-index"))*25+"%"},"slow");
	$(".brand-box-kid").stop().animate({opacity:0},"slow").css({display:"none"}).eq(i).stop()
	.css({display:"block"}).animate({opacity:1},"slow");
})


