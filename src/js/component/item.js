define(["jquery","template"],($,template) =>{
	function Item(){
		
	}
	
	Item.prototype.init = function(url){
		
		new Promise((resolve,reject) => {
			$("#product-list").load("/html/component/item.html",() => {
				resolve();
			});
		}).then(() =>{
			$.ajax({
				type:"get",
				url:url,
				success:function(res){
					console.log(res);
					if(res.res_code === 1){
						
	//					let list = res.res_body.data;
						let html = template("list-template",{list:res.res_body.data});

						$("#product-list .product-wrapbox").html(html);
					}
				}
			});
		})
		
		
	}
	return new Item();
})