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
		suctionTop(){
		    $(window).scroll( function() {		    	
		        if($(document).scrollTop() > 130){
		    		$("header").css({height:"0px"});
		        	$("#header-content").css({"height":"50px","line-height":"50px"});
		        	$("nav").css({"height":"30px","font-size":"12px"});
		            $("header").css({"height":"80px"});
		            $(".nav-ul li a").addClass("stickicon");
		        }else{
		        	$("header").css({height:"130px"});
		        	$("#header-content").css({"height":"80px","line-height":"80px"});
		        	$("nav").css({"height":"50px","font-size":"16px"});
		            $("header").css({"height":"130px"});
		            $(".nav-ul li a").removeClass("stickicon");
		        }
		    });
		}
		tab(){
			$(".nav-li-main").on("mouseenter",function(){
				$(".second-menu").eq($(this).index()).addClass("ac").siblings().removeClass("ac");
			})
			$(".nav-li-main").on("mouseleave",function(){
				console.log("1");
				$(".second-menu").eq($(this).index()).removeClass("ac");
			})
			$(".second-menu").on("mouseenter",function(){
				$(this).addClass("ac").siblings().removeClass("ac");
			})
			$(".second-menu").on("mouseleave",function(){
				$(this).removeClass("ac");
			})
			
		}
	}
	return new Header();
})
