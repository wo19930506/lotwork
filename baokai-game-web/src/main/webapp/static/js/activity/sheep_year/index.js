/*
** MODAL
*/
function showModal($t, callback){
	if( !$t || !$t.length || $t.is(':visible') ) return false;
	$t.show();
	if( callback && typeof callback == 'function' ){
		callback();
	}
}
function hideModal($t, callback){
	if( !$t || !$t.length || $t.is(':hidden') ) return false;
	$t.hide();
	if( callback && typeof callback == 'function' ){
		callback();
	}
}

function getParam(name){
	var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");  
	if (reg.test(location.href)){
		return unescape(RegExp.$2.replace(/\+/g, " "));
	}else{
		return null;
	}
};	

var $overlayShadow = $('#overlay-shadow');

$(function(){
	
	$nav = $('#float-nav a');
	$nav.on('click', function(){
		var $target = $($(this).attr('href'));
		if( $(this).hasClass('active') || !$target.length ) return false;
		$(this).addClass('active').siblings('.active').removeClass('active');
		$('html, body').animate({
			scrollTop: $target.offset().top
		}, 1000);
		return false;
	});

	// 弹窗关闭事件
	$('[data-modal="close"]').on('click', function(){
		var $t = $(this).parents('.pop-modal:eq(0)');
		hideModal($overlayShadow);
		hideModal($t);
	});

	// 我的中奖结果
	$('[data-modal="result"]').on('click', function(){
		var urlName = '/sheepYear/getMyRotaryList';
		rulesShow(urlName);
	});

	//弹窗规则
	var rulesShow = function(urlName){
		var $dialog = $('#J-rules-tips'),
			$content = $('#J-rules-tips').find('.info-content');

		$.get(urlName,{'stamp': Math.random()},function(data){
			data=jQuery.parseJSON(data);
			var temple="<table class='rewards-history' style='width:99%'><thead><tr><th>用户名</th><th>奖金</th><th>我的记录</th></tr></thead><tbody>";
			if(data.length==0)
			{
				data=temple;
				data+="<tr><td colspan='3'>暂无抽奖结果</td></tr></tbody></table>";
			}else
			{    
				$.each(data,function(i){
					temple+="<tr><td>"+data[i].userName+"</td><td>"+data[i].desc+"</td><td>"+data[i].date+"</td></tr>";
				});
				temple+="</tbody></table>";
				data=temple;
			}
			$content.html(data);
			viewCenter($dialog);
			//显示弹窗
			showModal($dialog);
			showModal($overlayShadow);
		}, 'html').fail(function(data){
			alert('规则加载有误，请刷新页面。');
		});	
	};

	var viewCenter = function($dom){
		var winHeight = $(window).height(),
			height = $dom.outerHeight();	
		$dom.css('top', (winHeight - height) /2);
	};
	
	//判断用户抽奖次数
	 var disUserCount=function(){
		 var gameCount2=$('.dice-status .dice-status-1 .status-times').find('span').text();
		 var gameCount3=$('.rotary-status .status-times').find('span').text();
		 if(gameCount2=="0")
		 {
			 $('.dice-desktop').find('a').addClass('disabled');
		 }
		 if(gameCount3=="0")
		 {
			 $('.rotary-desktop').find('a').addClass('disabled');
	     }
     };

     disUserCount();
	// 规则事件
	$('[data-modal="rules"]').on('click', function(){
		var data=$(this).attr('data-rule'),
		    $dialog = $('#J-rules-tips'),
			$content = $('#J-rules-tips').find('.info-content');
			$content.html(data);
			viewCenter($dialog);
			//显示弹窗
			showModal($dialog);
			showModal($overlayShadow);
	});
	
	$('.nav-close').on('click',function(){
		$(this).parent().hide();
	});
	
    // 更多事件
	$('[data-modal="more"]').on('click', function(){
        
	    $.get('/sheepYear/getMyDiceList',{'stamp': Math.random()}, function(data){
			data=jQuery.parseJSON(data);
			var temple="",
			$dialog = $('#J-rules-tips'),
			$content = $('#J-rules-tips').find('.info-content');
			$content.css("height","300px").css("overflow-y","auto");
			temple +='<table border="1" align="center" style="width:100%;text-align:center;"><thead>';
			temple +='<tr><th style="text-align:center;">我的记录</th><th style="text-align:center;">押大小结果</th>';
			temple +='<th style="text-align:center;">押大小内容</th><th style="text-align:center;">奖金</th></tr></thead>';
			temple +='<tbody>';
			if(data.length==0)
			{
				temple+='<tr><td colspan="4">暂无记录</td></tr>';
			}else
			{
				$.each(data,function(i){
					temple +='<tr><td class="col-white">'+data[i].time+'</td>';
					temple +='<td><div class="dice-result-icon"><span class="dice-'+data[i].result[0]+'">'+data[i].result[0]+'</span><span class="dice-'+data[i].result[1]+'">'+data[i].result[1]+'</span><span class="dice-'+data[i].result[2]+'">'+data[i].result[2]+'</span></div></td>';
					temple +='<td>'+data[i].type+'</td>';
					temple +='<td>￥'+data[i].winMoney+'</td></tr>';
				});
			}
			temple +='</tbody></table>';
			$content.css("height","300px").css("overflow-y","auto");
			$content.html(temple);
			viewCenter($dialog);
			//显示弹窗
			showModal($dialog);
			showModal($overlayShadow);
		}, 'html').fail(function(data){
			alert('规则加载有误，请刷新页面。');
		});	
	});

	navArrowStatus = function(){
		var topNum = $(window).scrollTop(),
			num = 100,
			$navDom = $('#float-nav');
		//step-1
		if(topNum > 0 && topNum < 916 - num){
			$navDom.removeClass('step-1 step-2 step-3').addClass('step-1');
		}else if(topNum > 916 - num && topNum < 1746 - num){
			$navDom.removeClass('step-1 step-2 step-3').addClass('step-2');
		}else if(topNum >= 1746 - num){
			$navDom.removeClass('step-1 step-2 step-3').addClass('step-3');
		}
	};

	$(window).scroll(function(event) {
		navArrowStatus();
	});	

	navArrowStatus();
});