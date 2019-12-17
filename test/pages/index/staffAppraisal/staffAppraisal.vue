<template>
	<view class="appraisal">
		<titles :titles="titles" :showIcon="true"></titles>
		<view class="appraisal_content">
			<view class="appraisal_list">
				<view class="list_title flex">
					<view class="list_left">
						1、计划和执行能力
						<text>（权重10%）</text>
					</view>
					<text class="scores">已评分</text>
				</view>
				<view class="list_content">
					<text>无论是计划内还是临时交办的工作都能领会上级的意图，积极接受，制定切实可行的工作计划，迅速开展工作；对工作中可能遇到的困难和问题充分考虑，并作好处理预案；工作开展有序，有效地利用资源。</text>
				</view>
				<view class="list_score flex">
					<text>评分：</text>
					<input type="text" value=""  :class="active1?active:''" @focus="active1=true"  @blur="active1=false" />
				</view>
			</view>
			<view class="appraisal_list">
				<view class="list_title flex">
					<view class="list_left">
						2、创新能力
						<text>（权重15%）</text>
					</view>
					<text class="score">未评分</text>
				</view>
				<view class="list_content">
					<text>无论是计划内还是临时交办的工作都能领会上级的意图，积极接受，制定切实可行的工作计划，迅速开展工作；对工作中可能遇到的困难和问题充分考虑，并作好处理预案；工作开展有序，有效地利用资源。</text>
				</view>
				<view class="list_score flex">
					<text>评分：</text>
					<input :class="actives?active:''" type="text" value="" @focus="actives=true"  @blur="actives=false"/>
				</view>
			</view>
			<view class="appraisal_list">
				<view class="list_title flex">
					<view class="list_left">
						3、语言能力
						<text>（权重10%）</text>
					</view>
					<text class="score">未评分</text>
				</view>
				<view class="list_content">
					<text>无论是计划内还是临时交办的工作都能领会上级的意图，积极接受，制定切实可行的工作计划，迅速开展工作；对工作中可能遇到的困难和问题充分考虑，并作好处理预案；工作开展有序，有效地利用资源。</text>
				</view>
				<view class="list_score flex">
					<text>评分：</text>
					<input type="text" value="" :class="active2?active:''" @focus="active2=true"  @blur="active2=false" />
				</view>
			</view>
			<view class="staff_btn">
				<view class="btn" @tap="sure">
					保存
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
				actives:false,
				active:'active',
				active2:false,
				active1:false,
				
			};
		},
		methods:{
			focus(e){
				console.log(e)
				this.actives = true
			},
			blue(){
				this.actives = false
			},
			sure() {
				uni.switchTab({
					url: '/pages/index/index'
				});
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

					.scores {
						color: #54D29B;
						font-size: $font-size12;
					}

					.score {
						color: #FAA52D;
						font-size: $font-size12;
					}
				}
				.list_content{
					font-size: $font-size12;
					color:#909398 ;
					line-height: 18px;
					margin-bottom: 12px;
				}
				.list_score{
					justify-content: flex-end;
					align-content: center;
					align-items: center;
					text{
						font-size: $font-size16;
						color: #303132;
						margin-right: 4px;
					}
					input{
						width:64px ;
						height: 30px;
						border: 1px solid #EDEFF1;
						padding: 4px 12px 4px 10px;
						border-radius:0.24rem ;
					}
					.active{
						border: 1px solid #3D82FF;
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
