!function(a,b,c){var d,e={mainPanel:"#J-play-select",data:"",mainDom:".play-select",html:$('<div id="change"><ul class="play-select-title clearfix"></ul><ul class="play-select-content clearfix"></ul></div>'),resultDom:"#change .play-select-content"},f=a.Games,g={init:function(a){var b=this;f.setCurrentGameTypes(b),b.container=$(a.mainPanel),b.count=0,b.showCount=0,b.data=f.getCurrentGame().getGameConfig().getInstance().getTypes(),b.html=a.html,setTimeout(function(){b._showMainHTML(b.data)},0)},getContainerDom:function(){return this.container},_showMainHTML:function(a,b){for(var c,d=this,e=0,f=a.length;f>e;e++)c=a[e],b||d._bulidHTMl(c,"top"),"[object Array]"==Object.prototype.toString.call(c.childs)&&0!=c.childs.length?(d._showMainHTML(c.childs,!0),d._bulidHTMl(c,"child")):d._bulidHTMl(c,"terminal");b||d._appendHtml(d.html)},_bulidHTMl:function(a,b){var c=this,d=c.html.find(".play-select-title"),e=c.html.find(".play-select-content");switch(b){case"top":d.append('<li class="'+a.name+'">'+a.title+"</li>"),e.append('<li class="'+a.name+'"></li>');break;case"child":e.find("."+a.parent).append('<dl class="'+a.name+'"><dt>'+a.title+"：</dt></dl>");break;case"terminal":setTimeout(function(){e.find("."+a.mode+" ."+a.parent).append('<dd class="'+a.name+'">'+a.title+"</dd>")},0)}},_appendHtml:function(a){var b=this;$(b.defConfig.mainDom).prepend(a),b._bindTagSelect(),setTimeout(function(){b.fireEvent("endShow")},10)},_bindTagSelect:function(){var a,b=this;a=new phoenix.Tab({par:"#change",triggers:".play-select-title > li",panels:".play-select-content > li",eventType:"click",currPanelClass:"current"}),b.bigTab=a,a.addEvent("afterSwitch",function(a,c){var d=this.getTrigger(c),e=$("#change .play-select-content ."+d.attr("class").replace(/\s.*/g,"")+" dd:first");b._getMode(e)}),$("#change .play-select-content").on("click","dd",function(){b._getMode($(this))})},_getMode:function(a){var b=this,c=a.attr("class").replace(/\s.*/g,""),d=a.parent("dl").attr("class"),e=a.parents("li").eq(0).attr("class").replace(/\s.*/g,""),f=e+"."+d+"."+c;b.changeMode(f)},showTitleDom:function(){var a=this,b=a.getContainerDom(),c=b.find(".play-select-content");c.show()},hiddenTitleDom:function(){var a=this,b=a.getContainerDom(),c=b.find(".play-select-content");c.hide()},changeMode:function(a){var b,c,d,e,g=this,h=a.split("."),i=g.getContainerDom(),j="current",k=0;try{if(f.getCurrentGame().getCurrentGameMethod()&&a==f.getCurrentGame().getCurrentGameMethod().getGameMethodName())return}catch(l){}i.find(".play-select-content").is(":hidden")&&g.showTitleDom(),g.fireEvent("beforeChange",g.container,a),f.getCurrentGame().switchGameMethod(a),b=g.container.find(".play-select-title li"),b.removeClass(j),g.container.find(".play-select-title").find("."+h[0]).addClass(j),c=g.container.find(".play-select-content li"),c.removeClass(j),e=g.container.find(".play-select-content").find("."+h[0]),e.addClass(j),d=e.find("dd").removeClass(j),e.find("."+h[1]+" ."+h[2]).addClass(j),b.each(function(a){return $(this).hasClass(j)?(k=a,!1):void 0}),g.bigTab.index=k,g.fireEvent("endChange")}},h=a.Class(g,c);h.defConfig=e,h.getInstance=function(a){return d||(d=new h(a))},a[b]=h}(phoenix,"GameTypes",phoenix.Event);