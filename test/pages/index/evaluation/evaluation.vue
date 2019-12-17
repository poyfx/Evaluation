<template>
	<view class="evaluation">
		<titles :titles="titles" :showIcon="true"></titles>
		<view class="evaluation_content">
			<view class="evaluation_tips">
				<view class="tips_bg">
					<text>请完成所有人考评后，一次性提交</text>
				</view>
			</view>

			<view class="evaluation_box">
				<view class="evaluation_list flex border_bottom" @tap="all = !all">
					<text class="list_name">设计部门</text>
					<view class="flex">
						<text>未完成</text>
						<image src="../../../static/img/triangle.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="all_name" v-show="all">
					<view class="name_box flex border_bottom" @tap="user">
						<text class="list_name">秦泷</text>
						<view class="flex">
							<text>未完成</text>
							<uni-icons type="arrowright" size="20"></uni-icons>
						</view>
					</view>
					<view class="name_box flex border_bottom">
						<text class="list_name">湘不语</text>
						<view class="flex">
							<text class="scope">93</text>
							<uni-icons type="arrowright" size="20"></uni-icons>
						</view>
					</view>
					<view class="name_box flex border_bottom">
						<text class="list_name">隆傲</text>
						<view class="flex">
							<text class="scope">93</text>
							<uni-icons type="arrowright" size="20"></uni-icons>
						</view>
					</view>
				</view>

			</view>

			<view class="evaluation_box">
				<view class="evaluation_list flex border_bottom" @tap="all1 = !all1">
					<text class="list_name">人事部门</text>
					<view class="flex">
						<text class="complete">已完成</text>
						<image src="../../../static/img/triangle.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="all_name" v-show="all1">
					<view class="name_box flex border_bottom">
						<text class="list_name">秦泷</text>
						<view class="flex">
							<text class="scope">93</text>
							<uni-icons type="arrowright" size="20"></uni-icons>
						</view>
					</view>
					<view class="name_box flex border_bottom">
						<text class="list_name">湘不语</text>
						<view class="flex">
							<text class="scope">93</text>
							<uni-icons type="arrowright" size="20"></uni-icons>
						</view>
					</view>
					<view class="name_box flex border_bottom">
						<text class="list_name">隆傲</text>
						<view class="flex">
							<text class="scope">93</text>
							<uni-icons type="arrowright" size="20"></uni-icons>
						</view>
					</view>
				</view>
			</view>

			<view class="staff_btn">
				<view class="btn" @tap="sure">
					提交
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				titles: '员工考评',
				all:false,
				all1:false,
			};
		},
		methods: {
			sure() {
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
			user() {
				uni.navigateTo({
					url: '/pages/index/staffAppraisal/staffAppraisal'
				})
			},
		},
	}
</script>

<style lang="scss">
	.evaluation {
		padding-bottom: 58px;
		.evaluation_content {
			.evaluation_tips {
				width: 100%;
				padding: 12px 16px;
				background: #FFFFFF;
				margin-bottom: 11px;

				.tips_bg {
					background-color: #F2F7FF;
					padding: 8px 12px;
					color: #3D82FF;
					font-size: $font-size14;
				}
			}

			.evaluation_box {
				margin-bottom: 8px;

				.evaluation_list {
					width: 100%;
					padding: 12px 26px 12px 16px;
					justify-content: space-between;
					align-content: center;
					align-items: center;
					background: #FFFFFF;


					.list_name {
						color: #303132;
						font-size: $font-size16;
					}

					view {
						justify-content: space-between;
						align-content: center;
						align-items: center;

						image {
							width: 6px;
							height: 10px;
							margin-left: 10px;
						}

						text {
							color: #BFC2CA;
							font-size: $font-size16;
						}

						.complete {
							color: #54D29B;
						}
					}
				}

				.all_name {
					.name_box {
						width: 100%;
						padding: 12px 16px 12px 32px;
						justify-content: space-between;
						align-content: center;
						align-items: center;
						background: #FFFFFF;

						.list_name {
							color: #303132;
							font-size: $font-size16;
						}

						view {
							justify-content: space-between;
							align-content: center;
							align-items: center;

							text {
								color: #BFC2CA;
								font-size: $font-size16;
								margin-right: 8px;
							}

							.scope {
								color: #3D82FF;
							}
						}
					}
				}

			}


			.staff_btn {
				width: 100%;
				padding: 9px 0;
				position: fixed;
				bottom: 0;
				left: 0;
				background: #FFFFFF;
				border-top: 1px solid #EDEFF1;

				.btn {
					margin: 0 auto;
					width: 90%;
					background-color: #3D82FF;
					padding: 9px 0;
					font-size: $font-size16;
					color: #FFFFFF;
					text-align: center;
					border-radius: 0.25rem;
				}
			}
		}
	}
</style>
