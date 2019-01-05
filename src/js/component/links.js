define(["jquery"], () => {
	class Links{
		constructor(){
			this.init();
		}
		init(){
			//加载links.html			
			$(".links").load("/html/component/links.html")

		}
		
	}
	return new Links();
})