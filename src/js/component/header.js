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
				this.shopanimate();
			})
		}
		//是否有cookie
		hasuser(){
			if($.cookie("user") === undefined){
				$("#islogin").removeClass("logining").addClass("log-sign-button").html(
					`<a href="/html/login.html"><span class="log" title="登录">登录</span></a>
					<span>/</span>
				<a href="/html/register.html"><span class="register" title="注册">注册</span></a>`
				);
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
			}
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
		bgrecovery(){
			$(".bgrecovery-btn").on("click",function(){
				$(".bgblack").fadeOut();	
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
		//购物车弹出
		shopanimate(){
			var flag = true;
			$(".shop-box-show").on("click",function(e){
				e.stopPropagation();
				if(flag === true){
					$(".shop-animate-wrap").stop().animate({height:"300px"});
				}else{
					$(".shop-animate-wrap").stop().animate({height:"0"});
				}
				flag = !flag;
			})
		}
	}
	return new Header();
})
