define(["jquery","template"],($,template) =>{
	function Items(){
		
	}
	
	Items.prototype.init = function(url){
//		new Promise((resolve,reject) => {
//			$("#list-man").load("/html/component/items.html",() => {
//				resolve();
//			});
//		}).then(() =>{
//			$.ajax({
//				type:"get",
//				url:url,
//				success:function(res){
//					console.log(res);
//					if(res.res_code === 1){
//						
//	//					let list = res.res_body.data;
//						let html = template("index-template",{list:res.res_body.data});
//
//						$("#list-man div").html(html);
//					}
//				}
//			});
//		})
		
		
	}
	return new Items();
})