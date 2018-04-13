
(function(host, Danshi, undefined){
	var defConfig = {
		name:'sixing.zhixuan.danshi',
		//玩法提示
		tips: '四星直选单式玩法提示',
		//选号实例
		exampleTip: '四星直选单式弹出层1111提示'
	},
	Games = host.Games,
	SSC = Games.SSC.getInstance();
	
	
	//定义方法
	var pros = {
		init:function(cfg){
			var me = this;
			//建立编辑器DOM
			//防止绑定事件失败加入定时器
			setTimeout(function(){
				me.initFrame();
			},25);
		},
		rebuildData:function(){
			var me = this;
			me.balls = [
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
						];
		}
	};
	
	
	//继承Danshi
	var Main = host.Class(pros, Danshi);
		Main.defConfig = defConfig;
	//将实例挂在游戏管理器上
	SSC[defConfig.name] = new Main();
	
	
	
})(phoenix, phoenix.Games.SSC.Danshi);

