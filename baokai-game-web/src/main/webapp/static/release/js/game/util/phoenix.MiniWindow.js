!function(a,b,c,d){var e,f=a.util,g={confirmButtonText:"confirm",cancelButtonText:"cancel",closeButtonText:"closeTip",cls:"",contentHtml:"",afterSetContentDelay:0,effectShow:function(){var a=this;f.toViewCenter(a.dom),this.dom.show()},effectHide:function(){this.dom.hide()},zIndex:700,isFixed:!0},h=(d(document),{init:function(a){var b=this,c=a.isFixed?"fixed":"absolute";c=f.isIE6?"absolute":c,b.dom=d('<div class="j-ui-miniwindow '+a.cls+'" style="z-index:'+a.zIndex+";position:"+c+';display:none;"><div class="hd"><i class="close closeBtn"></i><span class="title">提示</span></div><div class="bd"></div><a style="display:none" href="javascript:void(0);" class="btn confirm"><span>确 认</span><b class="btn-inner"></b></a><a style="display:none" href="javascript:void(0);" class="btn cancel"><span>取 消</span><b class="btn-inner"></b></a><a href="javascript:void(0);" style="display:none" class="btn closeTip"><span>关 闭</span><b class="btn-inner"></b></a></div>').appendTo("body"),b.effectShow=a.effectShow,b.effectHide=a.effectHide,b.dom.on("click",".closeBtn",function(){b.doNormalClose(),b.hide()}),b.dom.find("."+b.defConfig.confirmButtonText).bind("click",function(){b.doConfirm()}),b.dom.find("."+b.defConfig.cancelButtonText).bind("click",function(){b.doCancel()}),b.dom.find("."+b.defConfig.closeButtonText).bind("click",function(){b.doClose()})},reSetPosition:function(){var a=this,b=a.defConfig.isFixed?"fixed":"absolute";b=f.isIE6?"absolute":b,a.dom.removeAttr("style"),a.dom.css({"z-index":a.defConfig.zIndex,position:b,display:"none"})},doNormalClose:function(){},doConfirm:function(){},doCancel:function(){},doClose:function(){},getConfirmButtonDom:function(){var a=this;return a.getContainerDom().find("."+a.defConfig.confirmButtonText)},getCancelButtonDom:function(){var a=this;return a.getContainerDom().find("."+a.defConfig.cancelButtonText)},getCloseButtonDom:function(){var a=this;return a.getContainerDom().find("."+a.defConfig.closeButtonText)},setConfirmName:function(a){var b=this;b.getConfirmButtonDom().html(a+'<b class="btn-inner"></b>')},setCancelName:function(a){var b=this;b.getCancelButtonDom().html(a+'<b class="btn-inner"></b>')},setCloseName:function(a){var b=this;b.getCloseButtonDom().html(a+'<b class="btn-inner"></b>')},showConfirmButton:function(){var a=this;a.getConfirmButtonDom().show()},showCancelButton:function(){var a=this;a.getCancelButtonDom().show()},showCloseButton:function(){var a=this;a.getCloseButtonDom().show()},hideConfirmButton:function(){var a=this;a.getConfirmButtonDom().hide()},hideCancelButton:function(){var a=this;a.getCancelButtonDom().hide()},hideCloseButton:function(){var a=this;a.getCloseButtonDom().hide()},setTitle:function(a){this.getTitleDom().html(a)},setContent:function(a,b){var c=this,d=c.defConfig,e=0;c.getContentDom().html(a),e=d.afterSetContentDelay?d.afterSetContentDelay:e,e=b?b:e,e>0?setTimeout(function(){c.fireEvent("afterSetContent")},e):c.fireEvent("afterSetContent")},show:function(){var a=this;a.fireEvent("beforeShow"),this.effectShow(),a.fireEvent("afterShow"),f.isIE6&&a.defConfig.isFixed&&(a._IE6Fixed=f.startFixed(a.dom))},hide:function(){var a=this;a.effectHide(),a.fireEvent("afterHide"),f.isIE6&&a.defConfig.isFixed&&a._IE6Fixed.stop()},getContainerDom:function(){var a=this;return a._containerDom||(a._containerDom=a.dom)},getCloseDom:function(){var a=this;return a._closeDom||(a._closeDom=a.dom.find(".close"))},getTitleDom:function(){var a=this;return a._titleDom||(a._titleDom=a.dom.find(".title"))},getContentDom:function(){var a=this;return a._ContentDom||(a._ContentDom=a.dom.find(".bd"))}}),i=a.Class(h,c);i.defConfig=g,a[b]=i,a[b].getInstance=function(){return e||new i(g)}}(phoenix,"MiniWindow",phoenix.Event,jQuery);