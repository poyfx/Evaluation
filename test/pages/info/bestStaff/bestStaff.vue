<template>
	<view class="bast">
		<titles :titles="titles" :showIcon="true"></titles>
		<view class="bast_content">
			<view class="list_type flex">
				<view class="list_box flex">
					<view>类型：</view>
					<text class="ticket">投票</text>
				</view>
				<view class="list_box  flex" >
					<view>范围：</view>
					<text class="allcompany">全公司</text>
				</view>
			</view>
			<view class="bast_choose">
				<view class="choose_title">
					您此次投票选择的是：
				</view>
				<view class="choose_content flex">
					<text>【战略营销部】</text>
					<text>【市场开发部】</text>
					<text>【总经理办公室（行政服务中心）】</text>
					<text>【董事会办公室】</text>
				</view>
			</view>
			<view class="bast_time">
				<text>提交时间 &nbsp;&nbsp;2019-112-27 &nbsp;&nbsp;20：00</text>
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
				titles: '优秀员工评选'
			};
		},
		methods:{
			sure(){
				uni.navigateBack({
					delta:1
				})
			},
		}
	}
</script>

<style lang="scss">
.bast{
	padding-bottom: 58px;
	.bast_content{
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
				.allcompany{
					color: #3D82FF;
				}
				.assessment{
					color: #FE5245;
				}
			}
		}
		.bast_choose{
			padding: 16px 16px 0;
			background: #FFFFFF;
			margin-bottom: 16px;
			.choose_title{
				font-size: $font-size18;
				color: #303132;
				font-weight: bold;
				margin-bottom: 16px;
			}
			.choose_content{
				
				flex-direction: column;
				
				text{
					margin-bottom: 16px;
					color: #3D82FF;
					font-size: $font-size16;
				}
			}
		}
		.bast_time{
			padding: 16px;
			background: #FFFFFF;
			color: #BFC2CA;
			font-size: $font-size16;
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
