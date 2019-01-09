//详情的业务逻辑
require(["./requirejs.config"], () => {
	//引入details需要依赖的模块
	require(["jquery","url", "header","links","footer","chatfixed","cookie"], ($,url) => {
		$(function(){
			//
			let arrSearch = location.search.slice(1).split("=");
			let searchObj = {};
			searchObj[arrSearch[0]] = arrSearch[1];
			$.ajax({
				type:"get",
				url:url.baseUrlRap+"/details",
				data:searchObj,
				datatype:"json",
				success:function(res){
					var data = res.res_body;
					var arrImg = [];
					for(var key in data.images){
						arrImg.push(data.images[key]);
					}				
					$("#product-name").html(data.title);
					$(".product-price span").text(data.price);
					$(".product-img-list b").each(function(i,item){
						$(item).html(`<img src="${arrImg[i]}">`);									
					})
					$(".product-img").html($(".cur").html());
					$(".product-img-list").on("click","b",function(){
						$(this).addClass("cur").siblings().removeClass("cur");
						$(".product-img").html($(".cur").html());
					})
					//码数遍历
					let strSelect = `<option>请选择尺码</option>`;
					for(var key in data.size){
						strSelect += `<option value='${key}'>${data.size[key]}</option>`
					}
					$("#sizeSelect").html(strSelect);
					$("#sizeSelect").on("change",function(){
						$(".select-msg-right span").html($(this).children('option:selected').val()); 
					})
					//数量加减
					$(".select-num-add").on("click",function(){
						var num = $(".select-num-right span").html();
						$(".select-num-right span").html(++num);
					})
					$(".select-num-reduce").on("click",function(){
						var num = $(".select-num-right span").html();
						if(num>1){
							$(".select-num-right span").html(--num);
						}
					})
					$("#now-buy-btn").on("click",function(){
						if($.cookie("user") === undefined){
							alert("请先登录！");
						}else{
							
						}
					})
					$("#add-shoppingcart-btn").on("click",function(){
						var $selectNum = Number($(".select-num-right span").html());
						var $size = $(".select-msg-right span").html();
						if(!isNaN(Number($size))){
							var objAddcart = {
								id : data.id,
								title : data.title,
								price : data.price,
								selectNum : $selectNum,
								size : $size,
								img : arrImg[0]
							};

							//判断是否有shop
							var arrAllgoods = $.cookie("shop") ? JSON.parse($.cookie("shop")) : [];
							//判断旗帜
							var flag = true;
							//遍历cookie中的数组
							for(var i = 0;i < arrAllgoods.length;i++){
								//当id值和size值同时相等，旗帜变false
								if(objAddcart.id === arrAllgoods[i].id && objAddcart.size === arrAllgoods[i].size){
									arrAllgoods[i].selectNum++;
									flag = false;
								}
							}
			
							if(flag){
								arrAllgoods.push(objAddcart);
							}
							$.cookie("shop",JSON.stringify(arrAllgoods));
						}else{
							alert("请选择尺码！");
						}
					})
					
				}
			})
			
			$(".share-title").on("click",function(){
				if($(".share-content").height() === 0){
					$(".share-content").stop().animate({height:"115px"});
				}else{
					$(".share-content").stop().animate({height:"0"});
				}
			})
		})
	})
})