<template>
	<view class="index">
		<titles :titles="titles" :showIcon="true"></titles>
		<view class="index_content">
			<view class="index_list" @tap="bestStaff">
				<view class="list_title">
					<text>优秀员工评选</text>
				</view>
				<view class="list_type flex">
					<view class="list_box flex">
						<view>类型：</view>
						<text class="ticket">投票</text>
					</view>
					<view class="list_box  flex" style="justify-content: flex-end;">
						<view>范围：</view>
						<text class="allcompany">全公司</text>
					</view>
				</view>
				<view class="list_time flex">
					<text>提交时间 &nbsp;&nbsp;2019-112-27 &nbsp;&nbsp;20：00</text>
				</view>
			</view>
			
			<view class="index_list" @tap="assessmentStall">
				<view class="list_title">
					<text>2019年员工考核互评</text>
				</view>
				<view class="list_type flex">
					<view class="list_box flex">
						<view>类型：</view>
						<text class="assessment">考核</text>
					</view>
					<view class="list_box  flex" style="justify-content: flex-end;">
						<view>范围：</view>
						<text class="allcompany">全公司</text>
					</view>
				</view>
				<view class="list_time flex">
					<text>提交时间 &nbsp;&nbsp;2019-112-27 &nbsp;&nbsp;20：00</text>
				</view>
			</view>
			
			<view class="index_list" >
				<view class="list_title">
					<text>2019年员工考核他评</text>
				</view>
				<view class="list_type flex">
					<view class="list_box flex">
						<view>类型：</view>
						<text class="assessment">考核</text>
					</view>
					<view class="list_box  flex" style="justify-content: flex-end;">
						<view>范围：</view>
						<text class="allcompany">全公司</text>
					</view>
				</view>
				<view class="list_time flex">
					<text>提交时间 &nbsp;&nbsp;2019-112-27 &nbsp;&nbsp;20：00</text>
				</view>
			</view>
			<view class="nomore flex">
				没有更多了
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titles: '测评历史'
			}
		},
		onLoad() {

		},
		methods: {
			bestStaff(){
				uni.navigateTo({
					url:'../bestStaff/bestStaff'
				})
			},
			assessmentStall(){
				uni.navigateTo({
					url:'../assessmentStall/assessmentStall'
				})
			},
		}
	}
</script>

<style lang="scss">
	.index {
		.index_content {
			.index_list {
				margin: 8px;
				padding: 12px 47px 12px 55px;
				background-color: #FFFFFF;
				border-radius: 0.5rem;
				text-align: center;

				.list_title {
					font-size: $font-size16;
					font-weight: bold;
					color: #606265;
					margin-bottom: 12px;
				}

				.list_type {
					justify-content: space-between;
					margin-bottom: 12px;
					.list_box {
						width: 50%;
						align-content: center;
						align-items: center;
						font-size: $font-size14;

						view {
							color: #606265;

						}

						.ticket {
							color: #54D29B;
						}
						.allcompany{
							color: #3D82FF;
						}
						.assessment{
							color: #FE5245;
						}
					}
				}
				.list_time{
					color: #BFC2CA;
					font-size: $font-size12;
					justify-content: flex-start;
				}
			}
			.nomore{
				width: 100%;
				height: 44px;
				justify-content: center;
				align-content: center;
				align-items: center;
				color: #BFC2CA;
				font-size: $font-size12;
			}
		}
	}
</style>
