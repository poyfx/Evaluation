<template>
	<view class="info">
		<titles :titles="titles" :showIcon="false"></titles>
		<view class="info_content">
			<view class="info_list">
				<view class="list_box border_bottom flex">
					<text>姓名</text>
					<text>秦长青</text>
				</view>
				<view class="list_box  flex">
					<text>手机</text>
					<text>155****6936</text>
				</view>
			</view>
			<view class="info_list">
				<view class="list_box border_bottom flex">
					<text>部门</text>
					<text>人事部</text>
				</view>
				<view class="list_box  flex">
					<text>职位</text>
					<text>人事部部长</text>
				</view>
			</view>
			
			<view class="info_list">
				<view class="list_history  flex" @tap="gohistory">
					<text>评测历史</text>
					<uni-icons type="arrowright" size="22"></uni-icons>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titles:'我的'
			};
		},
		methods:{
			gohistory(){
				uni.navigateTo({
					url:'/pages/info/evaluationHistory/evaluationHistory'
				})
			},
		},
	}
</script>

<style lang="scss">
.info{
	.info_content{
		.info_list{
			margin-top: 8px;
			padding-left:15px ;
			background-color: #FFFFFF;
			.list_box{
				padding: 12px 0 13px;
				align-content: center;
				align-items: center;
				text{
					margin-right: 20px;
					font-size: $font-size16;
				}
			}
			.list_history{
				padding: 12px 17px 13px 0px;
				justify-content: space-between;
				align-content: center;
				align-items: center;
				font-size: $font-size16;
			}
		}
	}
}
</style>
