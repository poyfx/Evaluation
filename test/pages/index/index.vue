<template>
	<view class="index">
		<titles :titles="titles"></titles>
		<view class="index_content">
			<view class="index_list" @tap="staff(item.type,item.id,item.deptId) " v-for="(item , index) in list" :key="index">
				<view class="list_title">
					<text>{{item.title}}</text>
				</view>
				<view class="list_type flex">
					<view class="list_box flex">
						<view>类型：</view>
						<text class="ticket" v-show="item.type == 1">投票</text>
						<text class="assessment" v-show="item.type == 2">民主测评</text>
					</view>
					<!-- <view class="list_box  flex" style="justify-content: flex-end;">
						<view>范围：</view>
						<text class="allcompany">{{item.deptName}}</text>
					</view> -->
				</view>
				<view class="list_time flex">
					<text>截止时间 &nbsp;&nbsp;{{item.deadline}}</text>
				</view>
			</view>
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
				titles: '皖天然气测评系统',
				list: [],
			}
		},
		onShow() {
			this.getTops()
		},
		methods: {
			
			getTops() {
				topsService.getTopies({
					success: res => {
						if (res.statusCode == 200 && res.data.code == 0) {
							console.log(res)
							this.list = res.data.topicList
						}
					},
					fail: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					}
				})
			},
			staff(type, id, topid) {
				console.log(type)
				if (type == 1) { //投票
					uni.navigateTo({
						url: './excellentStaff/excellentStaff?id=' + id + '&topid=' + topid
					})
				} else { //考核
					uni.navigateTo({
						url: './evaluation/evaluation?id=' + topid + '&topid=' + id
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
					justify-content: center;
					margin-bottom: 12px;

					.list_box {
						// width: 50%;
						align-content: center;
						align-items: center;
						font-size: $font-size14;
						justify-content: center;
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
					justify-content: center;
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
