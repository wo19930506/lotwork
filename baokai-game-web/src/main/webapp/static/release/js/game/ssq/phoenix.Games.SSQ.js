!function(a,b,c,d){var e,f={name:"SSQ",basePath:staticFileContextPath+"/static/js/game/ssq/",baseNamespace:"phoenix.Games.SSQ."},g=a.Games,h={init:function(){var a=this;a.eventProxy(),a.getDynamicConfig()},getGameConfig:function(){return a.Games.SSQ.Config},bonusGroupProce:function(){var a=this,b=(phoenix.Mask.getInstance(),g.getCurrentGameMessage()),c="",d=!1,e=(g.getCurrentGame().getName(),g.getCurrentGame().getGameConfig().getInstance().defConfig.lotteryId),f=g.getCurrentGame().getGameConfig().getInstance().defConfig.awardGroups,h=g.getCurrentGame().getGameConfig().getInstance().defConfig.userLvl;"undefined"!=typeof f&&(f=""==f?"":f,f.length>0&&$.each(f,function(a){return 1==f[a].betType?void(d=!0):void 0})),0==h?setTimeout(function(){b.show({mask:!0,title:"温馨提示",content:"<div class='pop-title'><i class='ico-error'></i><h4 class='pop-text'>您目前是总代，没有权限投注</h4></div>",confirmIsShow:!0,hideClose:!0,confirmFun:function(){g.getCurrentGameMessage().hide(),window.location.href=_logOut+"/index"}})},3e3):d||$.ajax({url:g.getCurrentGame().getGameConfig().getInstance().getQueryGameUserAwardGroupByLotteryIdUrl(),dataType:"json",async:!1,success:function(d){return d.length>0?($.each(d,function(a){d[a].lotteryId==e&&(c+='<label><input type="radio" class="radio" name="radionGourp" pro_awardGroupId='+d[a].awardGroupId+" pro_lotterySeriesCode = "+d[a].lotterySeriesCode+">"+d[a].awardName+"</label> &nbsp;")}),void a.giveBonusGoup(c)):void setTimeout(function(){b.show({mask:!0,title:"温馨提示",content:"<div class='pop-title'><i class='ico-error'></i><h4 class='pop-text'>没分配奖金组，请联系上一级或客服人员</h4></div>",confirmIsShow:!0,hideClose:!0,confirmFun:function(){window.location.href=_logOut+"/index"}})},3e3)}})},giveBonusGoup:function(a){var b=(phoenix.Mask.getInstance(),g.getCurrentGameMessage());setTimeout(function(){b.show({mask:!0,title:"温馨提示",content:'<div class="text-center"><p class="text-title">请选择一个奖金组，便于您投注时使用。</p><p class="radio-list"> '+a+'</p><p class="text-note">(注：您投注时使用的奖金组一经设定，不可修改。<a href="'+_logOut+'/applycenter/querybonusdetails/" target="_Blank">查看奖金详情</a>)</p></div>',confirmIsShow:!0,cancelIsShow:!0,cancelText:"返回首页",hideClose:!0,confirmFun:function(){var a=$("input:radio[name='radionGourp']:checked").attr("pro_awardgroupid");return""==a||a==d?!1:void $.ajax({url:g.getCurrentGame().getGameConfig().getInstance().getSaveProxyBetGameAwardGroupUrl()+"?awardGroupId="+a,dataType:"json",async:!1,success:function(a){b.show("1"==a.status?{mask:!0,title:"温馨提示",content:'<div class="bd text-center"><div class="pop-title"><i class="ico-success"></i><h4 class="pop-text">奖金组配置成功!	<br>刷新当前游戏页面。</h4></div></div>',closeIsShow:!0,hideClose:!0,closeFun:function(){location.reload(),g.getCurrentGameMessage().hide()}}:"2"==a.status?{mask:!0,title:"温馨提示",content:'<div class="bd text-center"><div class="pop-title"><i class="ico-waring"></i><h4 class="pop-text">您已经选择过奖金组!<br>刷新当前游戏页面。</h4></div></div>',closeIsShow:!0,hideClose:!0,closeFun:function(){location.reload()}}:{mask:!0,title:"温馨提示",content:"<div class='pop-title'><i class='ico-error'></i><h4 class='pop-text'>奖金组配置提交失败,<br />请检查网络并重新提交！</h4></div>",cancelIsShow:!0,hideClose:!0,cancelFun:function(){g.getCurrentGameMessage().hide()}})},error:function(){b.show({mask:!0,title:"温馨提示",content:"<div class='pop-title'><i class='ico-error'></i><h4 class='pop-text'>奖金组配置提交失败,<br />请检查网络并重新提交！</h4></div>",cancelIsShow:!0,hideClose:!0,cancelFun:function(){g.getCurrentGameMessage().hide()}})}})},cancelFun:function(){window.location.href=_logOut+"/index",g.getCurrentGameMessage().hide()}})},3e3)},editSubmitData:function(a){for(var b=a.balls,c=0,d=b.length,e="",f=[],g=[];d>c;c++)e=b[c].type,g.push(b[c]);return g=g.concat(f),a.balls=g,a},isLotteryStopSale:function(){var a=g.getCurrentGame().getGameConfig().getInstance().defConfig.isLotteryStopSale;a&&setTimeout(function(){phoenix.Games.getCurrentGameMessage().show({type:"lotteryClose",hideClose:!0,data:{tplData:{msg:"您好，当前彩种已停售!",lotteryType:' <dd><span class="pic"><img src="'+staticFileContextPath+'/static/images/game/tancenglogo/llssc.jpg"/></span><a class="btn" href="/gameBet/llssc">去投注</a></dd><dd><span class="pic"><img src="'+staticFileContextPath+'/static/images/game/tancenglogo/ll115.jpg"/></span><a class="btn" href="/gameBet/ll115">去投注</a></dd>'}}})},3e3)}},i=a.Class(h,c);i.defConfig=f,i.getInstance=function(a){return e||(e=new i(a))},a.Games[b]=i}(phoenix,"SSQ",phoenix.Game);