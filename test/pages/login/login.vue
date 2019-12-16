<template>
	<view class="login">
		<view class="login_content">
			<view class="login_title flex">
				<text>测评系统</text>
			</view>
			<view class="login_number">
				<text><input type="text" placeholder="手机号" /></text>
				<text><input type="text" placeholder="验证码" /></text>
				<text class="code" v-show="showtime">获取验证码</text>
				<text class="code" v-show="!showtime">重新获取({{count}})s</text>
			</view>
			<view class="login_btn">
				<view>登录</view>
			</view>
			<view class="version ">
				<view class="flex">
					<text>version&nbsp;&nbsp;1.0</text>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 60,
				showtime: true,
			};
		}
	}
</script>

<style lang="scss">
	.login {
		height: 100vh;
		background: url(../../static/img/login_bg.png)no-repeat;
		background-position: 50% -7%;
		position: relative;
		.login_content {
			.login_title {
				width: 100%;
				height: 200px;
				justify-content: center;
				align-content: center;
				align-items: center;

				text {
					font-size: 4.8rem;
					color: #FFFFFF;
					letter-spacing: 2px;
					font-weight: 550;
				}
			}

			.login_number {
				padding: 49px 27px 0 28px;
				margin-bottom: 64px;
				text {
					width: 100%;

					input {
						border-bottom: 1px solid #EDEFF1;
						margin: 24px 0 8px;
						padding-bottom: 9px;
					}

				}

				.code {
					display: flex;
					justify-content: flex-end;
					font-size: $font-size12;
					color: #3D82FF;
				}
				.code_get{
					display: flex;
					justify-content: flex-end;
					font-size: $font-size12;
					color: #BFC2CA;
				}
			}
			.login_btn{
				width: 100%;
				
				view{
					width: 80%;
					background-color: #3D82FF;
					border-radius: 2.2rem;
					color: #FFFFFF;
					margin: 0 auto;
					text-align: center;
					font-size: $font-size18;
					padding: 10px 9px;
				}
			}
			.version{
				width: 100%;
				position: absolute;
				bottom: 24px;
				left: 0%;
				font-size: $font-size12;
				view{
					justify-content: center;
					align-items: center;
					align-items: center;
				}
			}
		}
	}
</style>
