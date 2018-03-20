
export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'edfx-app-login',
		children: [{
			name: 'header',
			className: 'edfx-app-login-header',
			component: 'Layout',
			children: [{
				name: 'header-left',
				component: 'Layout',
				className: 'edfx-app-login-header-left',
				children: [{
					name: 'logo',
					component: '::img',
					className: 'edfx-app-login-header-left-logo',
					src: '{{$getLogo()}}'
				},{
					name: 'sitename',
					component: '::span',
					className: 'edfx-app-login-header-left-sitename',
					children: '云ERP'
				}, {
					name: 'split',
					component: '::div',
					className: 'edfx-app-login-header-left-split',
				}, {
					name: 'item',
					className: 'edfx-app-login-header-left-login',
					component: '::span',
					children: '企业登录'
				}]
			}, {
				name: 'header-right',
				className: 'edfx-app-login-header-right',
				component: '::a',
				onClick: '{{$goRegisterA}}',
				children: ['立即注册']
			}]
		}, {
			name: 'content',
			className: 'edfx-app-login-content',
			component: 'Layout',
			children: [{
				name: 'bgs',
				className: 'edfx-app-login-content-bgs',
				component: '::div',
				children: {
					name: 'carousel',
					component: 'Carousel',
					autoplay: true,
					initialSlide: '{{data.other.selectedImgIndex}}',
					afterChange: '{{$imgChange}}',
					children: {
						name: 'container',
						component: '::div',
						children: [{
							name: 'img',
							component: '::img',
							src: '{{data.other.imgs[_rowIndex].url}}',
						}, {
							name: 'title',
							component: '::div',
							className: 'edfx-app-login-content-ad',
							children: [{
								name: 'item',
								component: '::p',
								children: '金财智能管家平台'
							}, {
								name: 'item',
								component: '::p',
								children: '广告词预留区域广告词预留区域'	
							}]
						}],
						_power: 'for in data.other.imgs'
					}
				}
			}, {
				name: 'form',
				component: 'Form',
				className: 'edfx-app-login-content-form',
				onSubmit: '{{$login}}',
				children: [{
					name: 'item1',
					component: 'Form.Item',
					className: 'edfx-app-login-content-form-title',
					children: '登录'
				}, {
					name: 'item2',
					component: 'Form.Item',
					validateStatus: "{{data.other.error.mobile?'error':'success'}}",
					help: '{{data.other.error.mobile}}',
					className: 'edfx-app-login-content-form-mobile',
					children: [{
						name: 'mobile',
						component: 'Input',
						placeholder: '请输入手机号',
						onFocus: "{{function(e){$fieldChange('data.form.mobile', e.target.value)}}}",						
						onChange: "{{function(e){$fieldChange('data.form.mobile', e.target.value)}}}",
						value: '{{data.form.mobile}}',
						prefix: {
							name: 'userIcon',
							component: 'Icon',
							fontFamily: 'edficon',
							type: 'yonghu',
						}
					}]
				}, {
					name: 'item3',
					component: 'Form.Item',
					validateStatus: "{{data.other.error.password?'error':'success'}}",
					help: '{{data.other.error.password}}',
					className: 'edfx-app-login-content-form-password',
					children: [{
						name: 'password',
						component: 'Input',
						placeholder: '请输入密码',
						type: 'password',
						onChange: `{{function(e){$setField('data.other.error.password', undefined);$setField('data.other.userInput', true);$setField('data.form.password', e.target.value)}}}`,
						onBlur: `{{function(e){$fieldChange('data.form.password', e.target.value)}}}`,
						value: '{{data.form.password}}',
						prefix: {
							name: 'passwordIcon',
							component: 'Icon',
							fontFamily: 'edficon',
							type: 'mima',
						}
					}]
				}, {
					name: 'item4',
					component: 'Form.Item',
					className: 'edfx-app-login-content-form-login',
					children: [{
						name: 'loginBtn',
						component: 'Button',
						type: 'softly',
						disabled: '{{$checkLogin()}}',
						children: '登录',
						onClick: '{{$login}}'
					}]
				}, {
					name: 'item5',
					component: 'Form.Item',
					className: 'edfx-app-login-content-form-more',
					children: [{
						name: 'remember',
						component: 'Checkbox',
						className: 'edfx-app-login-content-form-more-remember',
						checked: '{{data.form.remember}}',
						onChange: `{{function(e){$fieldChange('data.form.remember', e.target.checked)}}}`,
						children: '一周内自动登录'
					}, {
						name: 'register',
						className: 'edfx-app-login-content-form-more-register',
						component: '::a',
						style: { float: 'right' },
						onClick: '{{$goRegisterB}}',
						children: '立即注册'
					}, {
						name: '',
						component: '::i',
						style: {float: 'right',margin: '0 10px',fontStyle:'normal'},
						children: '|'
					},{
						name: 'forgot',
						className: 'edfx-app-login-content-form-more-forget',
						component: '::a',
						style: { float: 'right' },
						onClick: '{{$goForgot}}',
						children: '忘记密码'
					}]
				}]
			}]
		}, {
			name: 'footer',
			className: 'edfx-app-login-footer',
			component: 'Layout',
			children: [{
				name: 'item1',
				component: '::p',
				children: [{
					name: 'item1',
					component: '::span',
					children: '版权所有 © 2017 金财互联数据服务有限公司 粤ICP备'
				}, {
					name: 'item2',
					component: '::a',
					href: 'http://www.miitbeian.gov.cn',
					children: '14007298'
				}, {
					name: 'item3',
					component: '::span',
					children: '号'
				}]
			}]
		}]
	}
}

export function getInitState() {
	return {
		data: {
			form: {
				account:'',
				password: '',
				mobile: '',
				remember: false,
			},
			other: {
				error: {},
				selectedImgIndex: 0,
				imgs: [],
				userInput: false
			}
		}
	}
}