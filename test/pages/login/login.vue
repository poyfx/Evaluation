<template>
	<view class="login">
		<view class="login_content">
			<view class="login_title flex">
				<text>皖天然气测评系统</text>
			</view>
			<view class="login_number">
				<view><input type="text" placeholder="手机号" v-model="phone" /></view>
				<view><input type="text" placeholder="验证码" v-model="code" /></view>
				<text class="code" v-show="showtime" @tap="getCodes">获取验证码</text>
				<text class="codes" v-show="!showtime">重新获取({{count}})s</text>
			</view>
			<view class="login_btn">
				<view @tap="login(phone,code)">登录</view>
			</view>
			<view class="version ">
				<view class="flex">
					<text>version&nbsp;&nbsp;1.0</text>
				</view>
				<text class="circular">

				</text>
			</view>
		</view>
	</view>
</template>

<script>
	import loginService from '@/api/login.js'
	import {
		mapActions,
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				count: 60,
				showtime: true,
				phone: '',
				code: '',
			};
		},
		methods: {
			//获取验证码
			...mapActions(['handlLogin']),
			getCodes() {
				const that = this;
				let lock = false;
				if (!lock) {
					lock = true
					if (this.phone != "" && this.phone != null) {
						if (!/^1\d{10}$/.test(this.phone)) {
							this.lock = !this.lock;
							return uni.showToast({
								"title": '请填写正确的手机号码',
								"icon": "none",
								position: 'bottom',
								duration: 3000,
							})
						} else {
							loginService.getmsg({
								mobile: this.phone,
								success: res => {
									console.log(res)
									lock = false
									if (res.data.code == 0 && res.statusCode == 200) {
										this.showtime = !this.showtime;
										uni.showToast({
											title: '短信已发送',
											duration: 3000,
										})
										that.mess = res.data.value;
										that.timeDown(60);

									} else {

										uni.showToast({
											title: res.data.message,
											icon: 'none',
											position: 'bottom',
											duration: 3000,
										})
									}
								},
								fail: err => {
									console.log(err)
									lock = false
								},
								complete: res => {
									console.log(res)
									lock = false
								}
							})
						}


					} else if (this.phone == "" || this.phone == null) {
						lock = false
						return uni.showToast({
							"title": "手机号码不能为空",
							"icon": "none",
							position: 'bottom',
							duration: 3000,
						})
					}

				}
			},
			timeDown(time) {
				if (time == 0) {
					this.showtime = true;
					clearTimeout;
					return;
				} else {
					this.count = time--;
				}
				const that = this;
				setTimeout(() => {
					that.timeDown(time)
				}, 1000)
			},
			login(phone, code) {
				// this.$store.dispatch('handlLogin',{phone,code})
				this.handlLogin({
					"mobile": this.phone,
					"code": this.code,
					success:res=>{
						if(res.statusCode == 200 && res.data.code == 0){
							console.log(res)
							uni.setStorage({
								key:'user',
								data:res.data.user,
							})
							uni.switchTab({
								url: '../index/index'
							})
						}
					}
				})
				
			}
		},

	}
</script>

<style lang="scss">
	.login {
		height: 100vh;

		background: #FFFFFF url(../../static/img/login_bg.png)no-repeat;
		background-position: 50% -7%;
		position: relative;
		overflow: hidden;

		.login_content {
			.login_title {
				width: 100%;
				height: 200px;
				justify-content: center;
				align-content: center;
				align-items: center;

				text {
					font-size: 1.8rem;
					color: #FFFFFF;
					letter-spacing: 2px;
					font-weight: 550;
				}
			}

			.login_number {
				padding: 49px 27px 0 28px;
				margin-bottom: 64px;

				view {
					width: 100%;
					border-bottom: 1px solid #EDEFF1;
					// padding-bottom: 4px;

					input {

						margin: 24px 0 9px;

					}

				}

				.code {
					display: flex;
					justify-content: flex-end;
					font-size: $font-size12;
					color: #3D82FF;
					margin-top: 8px;
				}

				.codes {
					display: flex;
					justify-content: flex-end;
					font-size: $font-size12;
					color: #888888;
					margin-top: 8px;
				}

				.code_get {
					display: flex;
					justify-content: flex-end;
					font-size: $font-size12;
					color: #BFC2CA;
					margin-top: 8px;
				}
			}

			.login_btn {
				width: 100%;

				view {
					width: 80%;
					background-color: #3D82FF;
					border-radius: 2.2rem;
					color: #FFFFFF;
					margin: 0 auto;
					text-align: center;
					font-size: $font-size18;
					padding: 10px 9px;
					box-shadow: 0 16px 24px 0 rgba(61, 130, 255, 0.16);
				}
			}

			.version {
				width: 100%;
				position: absolute;
				bottom: 24px;
				left: 0%;


				view {
					justify-content: center;
					align-items: center;
					align-items: center;

					text {
						font-size: $font-size12;
						color: #FFFFFF;
						z-index: 1;
						font-weight: 700;
					}
				}

				.circular {
					height: 164px;
					width: 164px;
					border-radius: 50%;
					background: rgba(61, 130, 255, 0.2);
					position: absolute;
					left: 50%;
					top: -42px;
					margin-left: -82px;
				}
			}
		}
	}
</style>
