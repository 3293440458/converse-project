define(["jquery"], () => {
	class Bgblack{
		constructor(){
			this.init();
		}
		init(){
			//加载chatfixed.html			
			new Promise((resolve, reject) => {
				$(".bgblack").load("/html/component/bgblack.html", () => {
					resolve();
				})
			}).then(() => {
				this.bgchange();
				this.bgrecovery();
			})
		}
		bgchange(){
			$(".bgchange-btn").on("click",function(){
				if($(".bgblack").css("display") === "none"){
					$(".bgblack").fadeIn("slow");
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
	}
	return new Bgblack();
})