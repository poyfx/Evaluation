<template>
	<view class="index">
		<titles :titles="titles" :showIcon="true"></titles>
		<view class="index_content">
			<view class="index_list" @tap="bestStaff(item.type,item.id,item.deptId)" v-for="(item,index) in list" :key="index">
				<view class="list_title">
					<text>{{item.title}}</text>
				</view>
				<view class="list_type flex">
					<view class="list_box flex">
						<view>类型：</view>
						<text class="ticket" v-show="item.type==1">投票</text>
						<text class="assessment" v-show="item.type==2">考核</text>
					</view>
					<view class="list_box  flex" style="justify-content: flex-end;">
						<view>范围：</view>
						<text class="allcompany">{{item.deptName}}</text>
					</view>
				</view>
				<view class="list_time flex">
					<text>提交时间 &nbsp;&nbsp;2019-112-27 &nbsp;&nbsp;20：00</text>
				</view>
			</view>

			<!-- <view class="index_list" @tap="assessmentStall">
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
			</view> -->
			<view class="nomore flex">
				没有更多了
			</view>
		</view>
	</view>
</template>

<script>
	import topsService from '@/api/topies.js'
	export default {
		data() {
			return {
				titles: '测评历史',
				list: [],
			}
		},
		onLoad() {
			this.getHistory()
		},
		methods: {
			getHistory() {
				topsService.getTopiesHis({
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							this.list = res.data.topicList
						}
					},
					fail: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					},
				})
			},
			bestStaff(type,id,topid) {
				if (type == 1) {
					uni.navigateTo({
						url: '../bestStaff/bestStaff?id='+id+'&topid='+topid
					})
				} else {
					uni.navigateTo({
						url: '../assessmentStall/assessmentStall?id='+id+'&topid='+topid
					})
				}

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

						.allcompany {
							color: #3D82FF;
						}

						.assessment {
							color: #FE5245;
						}
					}
				}

				.list_time {
					color: #BFC2CA;
					font-size: $font-size12;
					justify-content: flex-start;
				}
			}

			.nomore {
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
