<template>
	<view class="info">
		<titles :titles="titles" :showIcon="false"></titles>
		<view class="info_content">
			<view class="info_list">
				<view class="list_box border_bottom flex">
					<text>姓名</text>
					<text>{{realname}}</text>
				</view>
				<view class="list_box border_bottom  flex">
					<text>手机</text>
					<text>{{mobile}}</text>
				</view>
			</view>
			<!-- <view class="info_position">
				<view class="position">
					公司职位：
				</view>
				<view class="positoin_title border_bottom flex">
					<text>部门</text>
					<text>职位</text>
				</view>
				<view class="positoin_content border_bottom  flex" v-for="(item, index) in position" :key="index">
					<text>{{item.deptName}}</text>
					<text>{{item.position}}</text>
				</view>
			</view> -->

			<view class="info_list">
				<view class="list_history  flex" @tap="gohistory">
					<text>评测历史</text>
					<uni-icons type="arrowright" size="22"></uni-icons>
				</view>

			</view>
			<view class="info_btn">
				<view @tap="logout">
					退出登录
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titles: '我的',
				realname:'',
				mobile:'',
				position:[],
			};
		},
		onShow() {
				console.log(1)
			this.getinfo()
		},

		methods: {
			getinfo(){
				try {
				    const value = uni.getStorageSync('user');
				    if (value) {
				        console.log(value);
						this.realname = value.realname;
						this.mobile = value.mobile;
						this.position = value.positionList
				    }
				} catch (e) {
				    // error
				}
			},
			logout(){
				uni.showModal({
					title:'提示',
					content:'确认退出？',
					success: function (res) {
					        if (res.confirm) {
					           uni.clearStorage();
							   // uni.removeStorage({
							   // 	key:'token'
							   // })
					           uni.navigateTo({
					           	url:'../login/login'
					           })
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
				})
			
			},
			gohistory() {
				uni.navigateTo({
					url: '/pages/info/evaluationHistory/evaluationHistory'
				})
			},
		},
	}
</script>

<style lang="scss">
	.info {
		.info_content {
			.info_list {
				margin-top: 8px;
				padding-left: 15px;
				background-color: #FFFFFF;

				.list_box {
					padding: 12px 0 13px;
					align-content: center;
					align-items: center;

					text {
						margin-right: 20px;
						font-size: $font-size16;
					}
				}

				.list_history {
					padding: 12px 17px 13px 0px;
					justify-content: space-between;
					align-content: center;
					align-items: center;
					font-size: $font-size16;
				}
			}

			.info_position {
				background-color: #FFFFFF;
				padding-left: 15px;
				font-size: $font-size16;
				.position {
					margin-right: 20px;
					font-size: $font-size16;
					padding: 12px 0 13px;
				}

				.positoin_title {
					justify-content: center;

					text {
						width: 50%;
						text-align: center;
						padding: 12px 0 13px;
						color:#BFC2CA;
					}
				}
				.positoin_content{
					justify-content: center;
					
					text {
						width: 50%;
						text-align: center;
						padding: 12px 0 13px;
						color: #303132;
					}
				}
			}

			.info_btn {
				width: 100%;
				margin: 80px 0 55px;

				view {
					width: 80%;
					color: #BFC2CA;
					background-color: #FFFFFF;
					border-radius: 22px;
					text-align: center;
					margin: 0 auto;
					line-height: 44px;
					font-size: $font-size18;
				}
			}
		}
	}
</style>
