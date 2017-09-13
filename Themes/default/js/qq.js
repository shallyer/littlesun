(function($) {
$.fn.qqFloat = function(options) {
// 处理默认参数
	var opts = $.extend({}, $.fn.qqFloat.defaults, options);
	var obj = $(this);
	var tag = obj.find(".QTag");
	var tag2 = obj.find(".QContentTag");
	var box = obj.find(".QQContent");
	var end = obj.find(".close_1")
	var tips=obj[0];
	var theTop = parseInt(opts.defaultY)/*这是默认高度,越大越往下*/;
	var old = theTop;		
	obj.css("top",parseInt(opts.defaultY));
	obj.css(opts.leftOrRight,parseInt(opts.defaultX));
	return this.each(function() {
		end.click(function(){
			obj.hide();
		})		
		if(opts.events=="click"){
			tag.click(function(){
			if(box.css("display")=="none"){obj.addClass("auto");obj.children("div").addClass("unfold");}
			else {obj.removeClass("auto");obj.children("div").removeClass("unfold");}
		});	
			tag2.click(function(){
			obj.removeClass("auto");
			obj.children("div").removeClass("unfold");
			})
		}
		else{		
			obj.hover(function(){
				if(box.css("display")=="none") {obj.addClass("auto");obj.children("div").addClass("unfold");}
			},function(){
				obj.removeClass("auto");
				obj.children("div").removeClass("unfold")
			})
		}
		function moveTips(){
			var tt=50;
			if (window.innerHeight)
			{
				pos = window.pageYOffset
			}
			else if (document.documentElement && document.documentElement.scrollTop)
			{
				pos = document.documentElement.scrollTop
			}
			else if (document.body)
			{
				pos = document.body.scrollTop;
			}
				pos=pos-tips.offsetTop+theTop;
				pos=tips.offsetTop+pos/10;
			if (pos < theTop) pos = theTop;
			if (pos != old)
			{
				tips.style.top = pos+"px";
				tt=10;
			}
				old = pos;
				setTimeout(moveTips,tt);
			}
			moveTips();
		});
};
//插件主要内容结束
// 插件的defaults
		$.fn.qqFloat.defaults = {
			defaultY:'100',
			defaultX:'0',
			leftOrRight:'right',
			events:'click'
		};
})(jQuery);

$(document).ready(function(e) {
	$(".q1").qqFloat({defaultY:'50',leftOrRight:"left",defaultX:'20'})
	$(".q2").qqFloat({leftOrRight:"right",defaultY:'250'})
	$(".q3").qqFloat({leftOrRight:"left",defaultY:'50',defaultX:'150'})
	$(".q4").qqFloat({leftOrRight:"left",defaultY:'50',defaultX:'300'})
	$(".q5").qqFloat({leftOrRight:"right",events:'click',defaultY:'250'})
});