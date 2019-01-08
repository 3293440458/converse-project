require.config({
	baseUrl : "/",

	paths: {
		"jquery" : "libs/jquery/jquery-1.11.3.min",
		"cookie" : "libs/jquery/jquery-plugins/jquery.cookie",
		"tools"  : "libs/tools/tools",
		"header" : "js/component/header",
		"links"  : "js/component/links",
		"footer" : "js/component/footer",
		"chatfixed" : "js/component/chatfixed",
		"url"    : "js/component/url"
	},
	//不符合AMD规范的模块，垫片
	shim: {
		"cookie" : {
			deps: ["jquery"]
		}
	}
})