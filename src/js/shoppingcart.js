//购物车的业务逻辑
require(["./requirejs.config"], () => {
	//引入购物车需要依赖的模块
	require(["jquery","url","header","footer","chatfixed","cookie"], ($,url,header) => {
		$(function(){
			//从头部得到是否有登录user
			console.log(header.hasuser());
			var $shopcart = $(".shoppingcart-box");
			var arrAllgoods = $.cookie("shop") ? JSON.parse($.cookie("shop")) : [];
			console.log(arrAllgoods);
			var str = "";
			//遍历cookie动态生成内容
			for(var i = 0;i < arrAllgoods.length;i++){
				str += `<div class="shopping-content">
						<div class="shopping-method">
							<div class="son-check check">
								
							</div>
							<div class="remove-goods">
								删除
							</div>
						</div>
						<div class="goods-box">
							<div class="goods-img">
								<a href="/html/details.html?id=${arrAllgoods[i].id}"><img src="${arrAllgoods[i].img}"/></a>
							</div>
							<div class="goods-message">
								<h4>${arrAllgoods[i].title}</h4>
								<p>类型:<span class="this-id">${arrAllgoods[i].id}</span></p>
								<p>尺码：<span class="this-size">${arrAllgoods[i].size}</span></p>
							</div>
							<div class="goods-number">
								<p class="unit-price">单价￥<span>${arrAllgoods[i].price}</span></p>
								<p class="unit-allprice">单品总价￥<span>${arrAllgoods[i].price*arrAllgoods[i].selectNum}</span></p>
								<div class="number-change-box">
									<b>数量</b>
									<div class="number-change">
										<a class="number-del">-</a>
										<span class="shopping-number">${arrAllgoods[i].selectNum}</span>
										<a class="number-add">+</a>
									</div>
								</div>
							</div>
						</div>
					</div>`
			}
			
			$(".close-cule").on("click",function(){
				$(".top-cule").remove();
			})
			//选择
			$shopcart.on("click",".check",function(){
				if($(this).hasClass("checked")){
					$(this).removeClass("checked")
				}else{
					$(this).addClass("checked");
				}
			})
			
			$(".shopping-list-content").html(str);
			var n=0;
			var $allnum = 0;
			//全选
			$shopcart.on("click","#all-check",function(){
				var $allGoodsPrice = 0;
				if($(this).hasClass("checked")){	
					$(".son-check").addClass("checked");
					n = $(".son-check").length;
				}else{
					$(".son-check").removeClass("checked");
					n = 0;
				}
				sum();
			})
			//单选
			$shopcart.on("click",".son-check",function(){
				$(this).hasClass("checked") ? n++ : n--;				
				n === $(".son-check").length ? $("#all-check").addClass("checked") : $("#all-check").removeClass("checked");
				sum();
			})
			//数量删减
			$shopcart.on("click",".number-del",function(){
				var i = $(this).siblings(".shopping-number").html();
				if(--i > 0){
					$(this).siblings(".shopping-number").html(i);
				}
				
				sum();
				
			})
			//数量添加
			$shopcart.on("click",".number-add",function(){
				var i = $(this).siblings(".shopping-number").html();
				$(this).siblings(".shopping-number").html(++i);
				sum();
			})
			//删除按钮		
			$shopcart.on("click",".remove-goods",function(){
				if(confirm("确认删除！")){
					$(this).parents(".shopping-content").remove();
					var sonCheck = $(".son-check");
					
					if($(this).siblings(".son-check").hasClass("checked")) n--;//删除的这行是被选中的n--
					//判断
					console.log(n);
					n === sonCheck.length ? $("#all-check").addClass("checked") : $("#all-check").removeClass("checked");
					//删除本行
					var thisId = Number($(this).parents(".shopping-content").find(".this-id").html());
					var thisSize = $(this).parents(".shopping-content").find(".this-size").html();
					for(var i = 0;i < arrAllgoods.length;i++){
						if(thisId === arrAllgoods[i].id && thisSize === arrAllgoods[i].size){
							arrAllgoods.splice(i,1);
							$.cookie("shop",JSON.stringify(arrAllgoods),{expires:30,path:"/"});
						}
					}
					//删除所有的goods，全选默认false
					if(sonCheck.length === 0){
						$("#all-check").removeClass("checked");
					}
					console.log(arrAllgoods);
					sum();
				}
			})
			//计算总价,单品总价
			function sum(){
				var $sonCheck = $(".son-check");//找到所有的子选框
				var _sum = 0;
				var $allSelectNum = 0;
				var $allNum = 0;
				//遍历
				for(var i =0;i < $sonCheck.length;i++){
					var $shopbox = $sonCheck.eq(i).parents(".shopping-content");//找到这行
					$allNum += Number($shopbox.find(".shopping-number").html());
					var sumBox = Number($shopbox.find(".unit-price span").html())*
								Number($shopbox.find(".shopping-number").html());
					$shopbox.find(".unit-allprice span").html(sumBox);
					if($sonCheck.eq(i).hasClass("checked")){
						$allSelectNum += Number($shopbox.find(".shopping-number").html());					
						_sum += sumBox;
					}
					
				}
				$(".select-num").html($allSelectNum);
				$(".allshopping-number").html($allNum);
				$(".goods-info").html("￥"+_sum);
			}
			sum();
		})
	})
})
