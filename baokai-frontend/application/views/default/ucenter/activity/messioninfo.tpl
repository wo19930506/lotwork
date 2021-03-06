<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<title>新手训练营-活动说明</title>
	<link href="{$path_img}/images/common/base.css" rel="stylesheet">
	<link href="{$path_img}/images/indexv2/active/beginner.css" rel="stylesheet">
</head>
<body class="guide-bg">
	<div class="guide-container">
		<div class="container-logo"></div>
		<div class="container-content">
			<h3><span>·</span>绑定银行卡</h3>
			<p>用户绑定唯一银行卡<span class="yellow">并锁定</span>后，系统将根据领奖条件自动判断并派奖到您的账户。</p>
			<p>派奖必须满足条件：</p>
			<ul>
				<li>①绑定的银行卡符合银行卡正确有效</li>
				<li>②从未在本平台绑定过的新卡</li>
				<li>③帐号为新注册帐号</li>
			</ul>
			<h3><span>·</span>首次充值</h3>
			<table class="guide-table">
				<tr>
					<th class="emphasize">首充金额</th>
					<th>返利金额</th>
					<th>返利百分比</th>
					<th>返利流水倍数</th>
					<th>投注期限</th>
				</tr>

				{foreach from=$boundsinfo item=data}
		        <tr>
				    <td class="emphasize">{$data.chargeAmt}</td>
					<td>{$data.chargePreium}</td>
					<td>{$data.chargePer}</td>
					<td>{$data.chargeFactor}</td>
					<td>{$data.bettingDate}</td>
				</tr>
	            {/foreach}
			
			</table>
			<p>享受首存开户优惠后，有效投注额达到相应的投注额条件,即可申请提款。<br>首充奖励分为5个奖励阶段：</p>
			<ul>

				<li>A、 10元≤充值额＜100元，立刻获得1元礼金</li>
				<li>B、 100元≤充值额＜1000元，在充值当天打满100元的1倍流水，获得5元奖励</li>
				<li>C、 1000元≤充值额＜5000元，在充值当天打满充值额的10倍流水，获得充值额10%的奖励</li>
				<li>D、 5000元≤充值额＜10000元，在充值当天打满充值额的10倍流水，获得充值额12%的奖励</li>
				<li>E、 10000元≤充值额，再充值当天打满充值额的10倍流水，获得充值额15%的奖励</li>
				<li class="yellow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中C、D、E 三个奖励项中只能领取1个，领取优先级按 E>D>C</li>
			</ul>

			<p>首存红利优惠使用条款：</p>
			<ul>
				<li>1、首次存款指用户在平台的第一笔存款金额。</li>
				<li>2、玩家只有首次存款才有资格获得对应奖金。</li>
				<li>3、有“返利流水倍数”条件的奖励，用户必须在 投注期限 天内完成投注，系统在投注期限到期后，自动判定&派奖。无“返利流水倍数”条件的奖励，系统即时自动派奖。</li>
				<li>4、每个用户只能持有一个帐户，如果开设了第二个帐户，该帐户将被关闭，所有奖金和彩金将被取消。每个用户和/或每个帐户将只能领取一次首充奖金。</li>
				<li>5、投注行为仅限彩票游戏，且不包含骰宝的“大小单双”玩法。</li>
				<li>6、本奖励将在用户达到奖励标准后，自动发放到用户帐号。</li>
				<li>7、如果本平台发现用户有任何不当套利行为，本平台有权收回所有活动奖励，并保留罚没套利用户资产和帐号的权力。</li>
				<li>8、本平台拥有对此次活动的最终解释权。</li>
			</ul>

			<h3><span>·</span>提款奖励</h3>

			<p>提款奖励派发条件：</p>
			<ul>
				<li>①提款帐号拥有活动资格且为首次提款。</li>
				<li>②提款卡与绑定卡一致且有效。</li>
			</ul>
			<p>满足上述2条件，系统自动派奖到用户帐号。<br>每个帐号、每张银行卡只能领取1次提款奖励。</p>


			<h3><span>·</span>日常任务</h3>
			<ul>
				<li>1.获得绑卡奖励的用户，才可开启每日活动。</li>
				<li>2.每日任务包括：每日答题和每日投注两类。</li>
				<li>3.每日答题：用户每天可回答2道问题，每答对1题获得对应随机金额的奖励。连续完成每日答题可获得额外奖励。</li>
				<li>4.每日投注奖励可同时领取，奖励进度于次日0：00重置进度。</li>
				<li>5.当天投注50元记为累计投注1天，达到累计投注天数可获得额外奖励。</li>
				<li>6.奖励金额将自动派发到用户帐号。奖励砸蛋次数将计入到用户的“砸蛋抽奖”次数内。</li>
			</ul>

			<h3><span>·</span>砸蛋抽奖</h3>
			<p>用户可以砸取金/银/铜蛋，获得对应等级的奖励。每砸一次，消耗一次对应等级的砸蛋次数。砸蛋次数用尽则不可砸蛋。<br>
				系统将砸蛋奖励自动发放到用户帐号。</p>
		</div>

		<div class="guide-footer">
			©2003-2016 宝开彩票 All Rights Reserved
		</div>
	</div>
</body>
</html>