<template>
	<view class="aStall">
		<titles :titles="titles" :showIcon="true"></titles>
		<view class="aStall_content">
			<view class="list_type flex">
				<view class="list_box flex">
					<view>类型：</view>
					<text class="assessment">考核</text>
				</view>
				<view class="list_box  flex">
					<view>范围：</view>
					<text class="allcompany">全公司</text>
				</view>
			</view>
			<view class="aStall_choose">
				<view class="choose_title">
					您对此次考核的评分为：
				</view>
				<view class="evaluation_box">
					<view class="all_name" >
						<view class="name_box flex border_bottom" @tap="detailed(index)" v-for="(item,index) in list" :key="index">
							<text class="list_name">{{item.examineeName}}</text>
							<view class="flex">
								总分：<text class="scope">{{item.score}}</text>
								<uni-icons type="arrowright" size="20"></uni-icons>
							</view>
						</view>
						<!-- <view class="name_box flex border_bottom">
							<text class="list_name">湘不语</text>
							<view class="flex">
								总分：<text class="scope">93</text>
								<uni-icons type="arrowright" size="20"></uni-icons>
							</view>
						</view>
						<view class="name_box flex border_bottom">
							<text class="list_name">隆傲</text>
							<view class="flex">
								总分：<text class="scope">93</text>
								<uni-icons type="arrowright" size="20"></uni-icons>
							</view>
						</view> -->
					</view>

				</view>
			</view>
			<view class="staff_btn">
				<view class="btn" @tap="sure">
					返回
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import topsService from '@/api/topies.js'
	export default {
		data() {
			return {
				titles: '员工考核互评',
				id:'',
				topid:'',
				list:[],
			};
		},
		onLoad(option) {
			this.topid = option.id;
			this.id = option.topid;
			this.getAssessments();
		},
		methods:{
			getAssessments(){
				topsService.getHistoryList({
					dept_id:this.id,
					topic_id:this.topid,
					success:res=>{
						console.log(res)
						if(res.statusCode == 200 && res.data.code == 0){
							this.list = res.data.topic.examineeList;
							uni.setStorage({
								key:'assessments',
								data:res.data.topic
							})
						}
					},
					fail:err=>{
						console.log(err)
					},
					complete:res=>{
						console.log(res)
					}
				})
			},
			detailed(index){
				uni.navigateTo({
					url:'../detailedInfo/detailedInfo?index='+index
				})
			},
			sure(){
				uni.navigateBack({
					delta:1
				})
			},
		},
	}
</script>

<style lang="scss">
	.aStall {
		padding-bottom: 58px;
		.aStall_content {
			.list_type {
				justify-content: space-between;
				margin: 16px;
				background: #FFFFFF;
				padding: 16px 0;
				border-radius: 8px;

				.list_box {
					width: 50%;
					justify-content: center;
					align-content: center;
					align-items: center;
					font-size: $font-size16;

					view {
						color: #303132;
						font-weight: 400;
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

			.aStall_choose {
				padding: 16px 16px 0;
				background: #FFFFFF;
				margin-bottom: 16px;

				.choose_title {
					font-size: $font-size18;
					color: #303132;
					font-weight: bold;
					margin-bottom: 16px;
				}

				.evaluation_box {
					margin-bottom: 8px;

					

					.all_name {
						.name_box {
							width: 100%;
							padding: 12px 16px 12px 32px;
							justify-content: space-between;
							align-content: center;
							align-items: center;
							background: #FFFFFF;
							font-size: $font-size16;

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
