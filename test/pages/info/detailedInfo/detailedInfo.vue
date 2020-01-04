<template>
	<view class="appraisal">
		<titles :titles="titles" :showIcon="true"></titles>
		<view class="appraisal_content">
			<view class="appraisal_list" v-for="(item,index) in list" :key="index">
				<view class="list_title flex">
					<view class="list_left">
						{{index+1}}、{{item.title}}
						<!-- <text>（权重{{item.weight}}%）</text> -->
					</view>

				</view>
				<!-- <view class="list_content">
					<text>{{item.content}}</text>
				</view> -->
				<view class="list_score flex">
					<text>评分：</text>
					<view>
						{{examineeList[index]}}
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
	export default {
		data() {
			return {
				titles: '民主测评',
				num: '',
				list: [],
				examineeList:[],
				
			};
		},
		onLoad(option) {
			this.num = option.index;
			console.log(this.num )
			this.getAssessments()
		},
		methods: {
			focus(e) {
				console.log(e)
				this.actives = true
			},
			getAssessments() {
				const assessment = uni.getStorageSync('assessments')
				try {
					if (assessment) {
						console.log(assessment)
						this.list = assessment.optionList;
						
					
						this.examineeList = assessment.examineeList[this.num].options.split(',');
						
						this.titles = assessment.title
							
					}
				} catch (e) {
					//TODO handle the exception
				}

			},
			blue() {
				this.actives = false
			},
			sure() {
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style lang="scss">
	.appraisal {
		padding-bottom: 58px;

		.appraisal_content {

			.appraisal_list {
				padding: 12px 16px 16px;
				background: #FFFFFF;
				margin-top: 8px;

				.list_title {
					margin-bottom: 12px;
					justify-content: space-between;
					align-content: center;
					align-items: center;

					.list_left {
						color: #303132;
						font-size: $font-size16;

						text {
							color: #3D82FF;
						}
					}

				}

				.list_content {
					font-size: $font-size12;
					color: #909398;
					line-height: 18px;
					margin-bottom: 12px;
				}

				.list_score {
					justify-content: flex-end;
					align-content: center;
					align-items: center;

					text {
						font-size: $font-size16;
						color: #303132;
						margin-right: 4px;
					}

					view {
						color: #FE5245;
						font-size: $font-size16;
						display: flex;
						align-content: center;
						align-items: center;
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
