$(document).ready(function(){
		$('.menu-list li:eq(8)').attr("class","current");
		$('.col-side .nav dd:eq(2)').attr("class","current");	
		var pass = '',
		    password = false,
			passConfirm = false,
			passCard = false,
			userId = $('#userId').val(),
			//密码框
			passWordDom = $('#passWord'),
			//密码提示
			passWordTips = '<span style="color:#ff0000">6-20位字符组成，区分大小写<span>'
			//确认密码框
			confirmPassWordDom = $('#confirmPassWord'),
			//密码卡
			passwordCardDom = $('#passwordCard'),
			//电话
		    phoneDom = $('#input-phone'),
		    //邮箱
		    emailDom = $('#input-email'),
			//表单
			formDom = $('#info-content'),
			//所属权限组
			groupDom = $('#J-group-select'),
			//修改按钮
			editButtonDom = $('#editButton'),
			//遮罩
			mask = phoenix.Mask.getInstance(),
			//弹窗
			message = phoenix.Message.getInstance();
			
			//检查密码
			var checkPassword = function(){
				var tipsDom = passWordDom.next(),v = $.trim(passWordDom.val());
				if(v.length >0 && !(/^.{6,20}$/).test(v)){
					tipsDom.html('<span style="color:#ff0000">长度有误，请输入6-20位字符<span>');
					password = false
					return false;
				}
				password = true;
				tipsDom.html('');
				pass = passWordDom.val();
				
				return password;
			};
			//密码提示
			passWordDom.blur(checkPassword);
			//确认密码检查
			var checkConfirmPassword = function(){
				var tipsDom = confirmPassWordDom.next(),v = $.trim(confirmPassWordDom.val());
				if(v.length >0 && $.trim(confirmPassWordDom.val()) != $.trim(passWordDom.val())){
					tipsDom.html('<span style="color:#ff0000">两次输入的密码不一致</span>');
					passConfirm = false
					return passConfirm;
				}
				passConfirm = true;
				tipsDom.html('');
				return passConfirm;
			};
			//确认密码检查
			confirmPassWordDom.blur(checkConfirmPassword);
			//电话
			var checkPhone = function(){
				var tipsDom = phoneDom.next(),v = $.trim(phoneDom.val());
				if(v == ''){
					tipsDom.html('<span style="color:#ff0000">电话不能为空</span>');
					return phone = false;
				}
				if(!(/^.{1,20}$/).test(v))
				{
					tipsDom.html('<span style="color:#ff0000">1-20位字符组成</span>');
					return phone = false;
				}
				phone = true;
				tipsDom.html('');
				return phone;
				
			};
			phoneDom.focus(function(){
				var tipsDom = $(this).next();
				tipsDom.html('1-20位字符组成');
			});
		    phoneDom.blur(checkPhone);
		
			//Email
			var checkEmail = function(){
				var tipsDom = emailDom.next(),v = $.trim(emailDom.val());
				if(v == ''){
					tipsDom.html('<span style="color:#ff0000">Email不能为空</span>');
					email = false;
					return false;
				}
				if(v.length < 6 || v.length > 50){
					tipsDom.html('<span style="color:#ff0000">长度有误，请输入6-50位字符</span>');
					email = false;
					return false;
				}
				if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(v)){
					tipsDom.html('<span style="color:#ff0000">请输入正确的email</span>');
					email = false;
					return false;
				}else{
					email = true;
					tipsDom.html('');
				}
				return email;
			};
			emailDom.focus(function(){
				var tipsDom = $(this).next();
				tipsDom.html('6-50位字符组成，例如abc@163.com');
			});
			emailDom.blur(checkEmail);
			
			//密码卡绑定
			passwordCardDom.blur(checkCard);
			
			function checkCard(){
				var tipsDom = passwordCardDom.next();
				var v=passwordCardDom.val();
				tipsDom.html('<span style="color:#ff0000"></span>');
				if(v == ''){
					tipsDom.html('<span style="color:#ff0000">密码卡不能为空</span>');
					passCard = false;
					return false;
				}
				if(!(/^\d{9}$/).test(v)){
					tipsDom.html('<span style="color:#ff0000">密码卡序列号由9位数字组成</span>');
					passCard = false;
					return false;
				} 
				//校验密码卡有且只能绑定一个用户    
				$.ajax({
	            url: baseUrl+'/aclAdmin/checkBindPwd',
	            async:false,
	            dataType: 'json',
	            type: 'POST',
	            data: "bindPwd="+v+"&id="+userId,   
	            success:function(data){
						if(Number(data['status']) == 0)
						{
							tipsDom.html('<span style="color:#ff0000">密码卡已被使用</span>');
							passCard = false;
							return false;
						}else
						{
							passCard = true;
							tipsDom.html('<span style="color:#ff0000"></span>');
						}
				   }
				});   
				
				return passCard;
			}
			
			//修改提交 
			editButtonDom.click(function(){
				var data = formDom.serialize(),
					successDom = $('#successTips'),
					groupDom = $("[name='groupId']"),
					errorDom = $('#errorTips');
				if(passWordDom.val()=="" || confirmPassWordDom.val() =="")
				{
					if(!(checkCard() && checkPhone() && checkEmail())){
						return;
					} 
				}else
				{
					if(!(checkPassword() && checkConfirmPassword() && checkCard() && checkPhone() && checkEmail())){
					     return;
				    } 
				}
				//权限组
                if($.trim(groupDom.val()) == '-1'){
					groupDom.next().html('<span style="color:#ff0000">请选择所属权限组</span>');
					return;
				}else{
					groupDom.next().html('');
				}
				$.ajax({
					url: baseUrl + '/aclAdmin/modifyUser',
					dataType: 'json',
					type: 'POST',
					data: data,
					success:function(data){
						if(Number(data['status']) == 1){
							successDom.show();
							mask.show();
							setTimeout(function(){
								successDom.hide();
								mask.hide()
							},2000)
						}else{
							errorDom.show();
							mask.show();
							setTimeout(function(){
								errorDom.hide();
								mask.hide()
							},2000)
						}
					}
				});
			})
	})