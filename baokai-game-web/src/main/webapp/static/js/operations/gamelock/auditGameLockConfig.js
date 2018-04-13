(function($){
	var inputTip = new phoenix.Tip.getInstance();
	//菜单样式加载
	$('.menu-list li').removeAttr("class");
	$('.menu-list li:eq(3)').attr("class","current"); 
	$('.col-side .nav dd:eq(0)').attr("class","current");
	$('#lockMenu').attr("class","current");
	
	$('body').on('mouseover', '.input-mark', function(){
		var dom = $(this),text = dom.attr('data-showtip');
		if(text){
			inputTip.setText(dom.attr('data-showtip'));
			inputTip.show(dom.outerWidth() + 4, dom.outerHeight()*-1, this);
		}
	}).on('mouseout', '.input-mark', function(){
		var text = this.getAttribute('data-showtip');
		if(text){
			inputTip.hide();
		}
	});
	
	
	$('#J-button-submit').click(function(e){
		e.preventDefault();
		$('#J-form').submit();
	});
	
	$('#J-button-submit_').click(function(e){
		e.preventDefault();
		$("#status").val(5);
		$('#J-form').submit();
	});
	
})(jQuery);