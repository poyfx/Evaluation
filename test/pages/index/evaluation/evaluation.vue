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
				<view class="all_name">
					<view class="name_box flex border_bottom" @tap="user(index)" v-for="(item,index) in list" :key="index">
						<text class="list_name">{{item.examineeName}}</text>
						<view class="flex">
							<text v-if="item.score == '' || item.score == null">未完成</text>
							<text v-else class="scope">{{item.score}}</text>
							<uni-icons type="arrowright" size="20"></uni-icons>
						</view>
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
	import topsService from '@/api/topies.js'
	export default {
		data() {
			return {
				titles: '员工考评',
				id:'',
				topid:'',
				list:[],
			};
		},
		onLoad(option) {
			this.id = option.id || '';
			this.topid = option.topid || '';
			this.getAssessments()
		},
		methods: {
			getAssessments(){
				topsService.getAssessment({
					dept_id:this.id,
					topic_id:this.topid,
					success:res=>{
						console.log(res)
						if(res.statusCode == 200 && res.data.code == 0){
							this.list = res.data.topic.examineeList;
							uni.setStorage({
								key:'assessment',
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
			sure() {
				topsService.getAllAssessment({
					dept_id:this.id,
					topic_id:this.topid,
					success:res=>{
						console.log(res)
						if(res.statusCode == 200 && res.data.code == 0){
							uni.switchTab({
								url: '/pages/index/index'
							});
							
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:"none",
								position:'bottom',
								duration:3000,
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
			user(index) {
				uni.navigateTo({
					url: '/pages/index/staffAppraisal/staffAppraisal?id='+this.id+'&topid='+this.topid+'&index='+index
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
</style>
