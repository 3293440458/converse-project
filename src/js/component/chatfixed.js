define(["jquery"], () => {
	class Chatfixed{
		constructor(){
			this.init();
			
		}
		init(){
			//加载chatfixed.html			
			new Promise((resolve, reject) => {
				$(".chatfixed").load("/html/component/chatfixed.html", () => {
					resolve();
				})
			}).then(() => {
				this.posi();
			})
		}
		posi(){
			$(window).on("scroll",function(){
				$(".chatfixed").stop().animate({top:$(document).scrollTop()+200+"px"},"slow");
			})
		}
		
	}
	return new Chatfixed();
})