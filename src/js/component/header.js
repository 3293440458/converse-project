define(["jquery"], () => {
	class Header{
		constructor(){
			this.init();
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("header").load("/html/component/header.html", () => {
					resolve();
				})
			}).then(() => {
				this.suctionTop();
				this.tab();
			})
		}
		//吸顶
		suctionTop(){
		    $(window).scroll( function() {		    	
		        if($(document).scrollTop() > 130){
		    		if($("nav").height() === 50){
		    			$("header").css({height:"0px"}).stop().animate({"height":"80px"});
			        	$("#header-content").stop().animate({"height":"50px","line-height":"50px"});
			        	//nav给的是css，没运动时间
			        	$("nav").css({"height":"30px","font-size":"12px"});
			            $(".nav-ul li a").addClass("stickicon");
		    		}
		        }else if($(document).scrollTop() === 0){
	        		$("header").stop().animate({height:"130px"});
		        	$("#header-content").stop().animate({"height":"80px","line-height":"80px"});
		        	$("nav").css({"height":"50px","font-size":"16px"});
		            $(".nav-ul li a").removeClass("stickicon");	
		        }
		    });
		}
		//选项卡
		tab(){
			$(".nav-li-main").on("mouseenter",function(){
				$(".second-menu").eq($(this).index()).stop().fadeIn();
			})
			$(".nav-li-main").on("mouseleave",function(){
				$(".second-menu").eq($(this).index()).stop().fadeOut();
			})
			$(".second-menu").on("mouseenter",function(){
				$(this).stop().css({display:"block"});
			})
			$(".second-menu").on("mouseleave",function(){
				$(this).stop().fadeOut();
			})
			
		}
	}
	return new Header();
})
