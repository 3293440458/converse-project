//购物车的业务逻辑
require(["./requirejs.config"], () => {
	//引入购物车需要依赖的模块
	require(["jquery", "header","footer","chatfixed","cookie"], () => {
		$(function(){
			console.log("3");
			$(".close-cule").on("click",function(){
				$(".top-cule").remove();
			})
	
			$(".check").on("click",function(){
				if($(this).hasClass("checked")){
					$(this).removeClass("checked")
				}else{
					$(this).addClass("checked");
				}
			})

			var $shopcart = $(".shoppingcart-box");
			var arr = $.cookie("shop") ? JSON.parse($.cookie("shop")) : [];
			console.log(arr);
			var str = "";
			for(var i = 0;i < 2;i++){
				str += `<div class="shopping-content">
						<div class="shopping-method">
							<div class="son-check check">
								
							</div>
							<div class="remove-goods">
								删除
							</div>
							<div class="edit-goods">
								编辑
							</div>
						</div>
						<div class="goods-box">
							<div class="goods-img">
								<a href="#"><img src="/static/images/163759C001_1B_NEW.png"/></a>
							</div>
							<div class="goods-message">
								<h4>【男女同款】Chuck 70</h4>
								<p>型号：163332C346</p>
								<p>颜色：冷杉绿</p>
								<p>尺码：40</p>
							</div>
							<div class="goods-number">
								<p class="unit-price">单价￥<span>559</span></p>
								<p class="unit-allprice">单品总价￥<span>559</span></p>
								<div class="number-change-box">
									<b>数量</b>
									<div class="number-change">
										<a class="number-del">-</a>
										<input id="shopping-number" type="text" name=""  value="1" />
										<a class="number-add">+</a>
									</div>
								</div>
							</div>
						</div>
					</div>`
			}
			$(".shopping-list-content").html(str);
			var n=0;
			$shopcart.on("click","#all-check",function(){
				if($(this).hasClass("checked")){
					$(".son-check").addClass("checked");
					n = $(".son-check").length;
				}else{
					$(".son-check").removeClass("checked");
					n = 0;
				}
				console.log(n);
			})
			$shopcart.on("click",".son-check",function(){
				$(this).hasClass("checked") ? n++ : n--;
				n === $(".son-check").length ? $("#all-check").addClass("checked") : $("#all-check").removeClass("checked");
			})
			$shopcart.on("click",".number-del",function(){
				var i = $(this).siblings(".shopping-number").val();
				var unitPrice = $(this).parents(".goods-number").children(".unit-price").children("span").text();
				
				if(i-- > 0){
					$(this).siblings(".s hopping-number").val(i);
					$(this).parents(".goods-number").children(".unit-allprice").children("span").text(i*unitPrice);
				}
			})
			$shopcart.on("click",".number-add",function(){
				var i = $(this).siblings(".shopping-number").val();
				var unitPrice = $(this).parents(".goods-number").children(".unit-price").children("span").text();
				$(this).siblings(".shopping-number").val(++i);
				$(this).parents(".goods-number").children(".unit-allprice").children("span").text(i*unitPrice);
				console.log(i);
			})
		})
	})
})
