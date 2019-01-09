//购物车的业务逻辑
require(["./requirejs.config"], () => {
	//引入购物车需要依赖的模块
	require(["jquery", "header","footer","chatfixed","cookie"], () => {
		$(function(){

			

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
										<input class="shopping-number" type="text" name=""  value="1" />
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
			$shopcart.on("click","#all-check",function(){
					var $allGoodsPrice = 0;
				if($(this).hasClass("checked")){
					
					$(".son-check").addClass("checked");
					$(".unit-allprice span").each(function(i,item){
						$allGoodsPrice += Number($(item).text());
					})
					n = $(".son-check").length;
				}else{
					$(".son-check").removeClass("checked");
					n = 0;
				}
				$(".goods-info span").html($allGoodsPrice);
			})
			$shopcart.on("click",".son-check",function(){
				var $unitAllprice = Number($(this).parents(".shopping-content").children(".goods-box").
				children(".goods-number").children(".unit-allprice").children("span").text());
//				var $shoppingNumber = $(this).parents(".shopping-content").children(".goods-box").
//				children(".goods-number").children(".number-change-box").children(".number-change").
//				children(".shopping-number").val();
				if($(this).hasClass("checked")){
					$(".goods-info span").html($unitAllprice+Number($(".goods-info span").html())); 
					n++;
				}else{
					$(".goods-info span").html(Number($(".goods-info span").html())-$unitAllprice);
					n--;
				}
				n === $(".son-check").length ? $("#all-check").addClass("checked") : $("#all-check").removeClass("checked");
			})
			$shopcart.on("click",".number-del",function(){
				var i = $(this).siblings(".shopping-number").val();
				var unitPrice = $(this).parents(".goods-number").children(".unit-price").children("span").text();
				if(i-- > 0){
					$(this).siblings(".shopping-number").val(i);
					$(this).parents(".goods-number").children(".unit-allprice").children("span").text(i*unitPrice);
				}
				var $allprice = 0;
				$(".shopping-number").each(function(j,item){
					$allprice += Number($(item).val());
				})
				
				$(".allshopping-number").text($allprice);
			})
			$shopcart.on("click",".number-add",function(){
				var i = $(this).siblings(".shopping-number").val();
				var unitPrice = $(this).parents(".goods-number").children(".unit-price").children("span").text();
				$(this).siblings(".shopping-number").val(++i);
				$(this).parents(".goods-number").children(".unit-allprice").children("span").text(i*unitPrice);
				var $allprice = 0;
				$(".shopping-number").each(function(j,item){
					$allprice += Number($(item).val());
				})
				
				$(".allshopping-number").text($allprice);
			})
//			function sum(){
//				var $sonCheck = $(".son-check");//找到所有的子选框
//				var _sum = 0;
//				//遍历
//				for(var i =0;i < $sonCheck.length;i++){
//					var  = sonCheck[i].parentNode.parentNode;//找到这行的tr
//					if(sonCheck[i].checked){
//						var sumTr = Number(tr.children[3].innerHTML)*
//									Number(tr.children[4].children[0].innerHTML);
//						_sum += sumTr;
//					}
//				}
//				$(".goods-info").html() = _sum;
//			}
//			sum();
		})
	})
})
