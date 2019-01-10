define(["jquery","cookie"], () => {
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
				this.hasuser();
				this.showUsermethod();
				this.signOut();
				this.bgblack();
				this.bgrecovery();
				this.suctionTop();
				this.tab();
				this.hasShopcart();
				this.bgblackDeep();
			})
		}
		//是否有user的cookie
		hasuser(){
			var hasUser;
			if($.cookie("user") === undefined){
				$("#islogin").removeClass("logining").addClass("log-sign-button").html(
					`<a href="/html/login.html"><span class="log" title="登录">登录</span></a>
					<span>/</span>
				<a href="/html/register.html"><span class="register" title="注册">注册</span></a>`
				);
				$(".shopbox").on("click",function(){
					alert("请先登录！")
				})
				hasUser = false;
			}else{
				$("#islogin").removeClass("log-sign-button").addClass("logining").html(
					`<span>欢迎您&nbsp;,&nbsp;&nbsp;&nbsp;${JSON.parse($.cookie("user")).id}</span>
					<div class="user-method">
						<div class="user-method-title">
							<span></span>
						</div>
						<div class="user-method-box">
							<ul>
								<li><a>我的账户</a></li>
								<li><a>我的订单</a></li>
								<li><a>我的优惠券</a></li>
								<li class="sign-out"><a>退出</a></li>
							</ul>
						</div>
					</div>`
				);
				$(".shopbox").on("click",function(){
					window.location.href = "/html/shoppingcart.html";
				})
				hasUser = true;
			}
			return hasUser;
		}
		signOut(){
			$(".sign-out").on("click",function(){
				$.cookie("user","",{expires:-1,path:"/"});
				location.href = "/index.html";
			})
		}
		//显示用户操作表
		showUsermethod(){
			$(".logining").hover(function(){
				$(".user-method").stop().animate({height:"200px"});
			},function(){
				$(".user-method").stop().animate({height:"0"});
			})
		}
		//点击黑屏聚焦视野
		bgblack(){
			$(".bgchange-btn").on("click",function(){
				if($(".bgblack").css("display") === "none"){
					$(".bgblack").fadeIn();
				}else{
					$(".bgblack").fadeOut();
				}
				
			})
		}
		bgblackDeep(){
			$(".bgchange-deep-btn").on("click",function(){
				if($(".bgblack-deep").css("display") === "none"){
					$(".bgblack-deep").fadeIn();
				}else{
					$(".bgblack-deep").fadeOut();
				}
				
			})
		}
		bgrecovery(){
			$(".bgrecovery-btn").on("click",function(){
				$(".bgblack").fadeOut();
				$(".bgblack-deep").fadeOut();
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
				$(this).stop().css({display:"block",opacity:1});
			})
			$(".second-menu").on("mouseleave",function(){
				$(this).stop().fadeOut();
			})
			
		}
		//购车弹窗内容
		hasShopcart(){
			if($.cookie("user") === undefined){
				$(".shop-animate-box").html("您还没有登录，请登录查看您的购物车！");
			}else{
				if($.cookie("shop") === undefined || JSON.parse($.cookie("shop")).length === 0){
					$(".myshop-message").html("您的购物车还没有东西哦，快去购物吧！");
					$("#change-btn").html("去购物！&gt;&gt;");
					$("#change-btn").on("click",function(){
						window.location.href = "/html/list.html";
					});
				}else{
					$(".myshop-message").html("");
					$("#change-btn").html("查看购物车&gt;&gt;");
					$("#change-btn").on("click",function(){
						window.location.href = "/html/shoppingcart.html";
					});
				}
			}
		}
		
	}
	return new Header();
})
