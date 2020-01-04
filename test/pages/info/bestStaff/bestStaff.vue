<template>
	<view class="bast">
		<titles :titles="titles" :showIcon="true"></titles>
		<view class="bast_content">
			<view class="list_type flex">
				<view class="list_box flex">
					<view>类型：</view>
					<text class="ticket">投票</text>
				</view>
				<!-- <view class="list_box  flex" >
					<view>范围：</view>
					<text class="allcompany">{{list.deptName}}</text>
				</view> -->
			</view>
			<view class="bast_choose">
				<view class="choose_title">
					您此次投票选择的是：
				</view>
				<view class="choose_content flex" v-for="(item, index) in chooseList" :key="index">
					<text>{{item.title}}</text>
				</view>
			</view>
			<view class="bast_time">
				<text>提交时间 &nbsp;&nbsp;{{list.createTime}}</text>
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
				titles: '',
				id:'',
				topid:'',
				list:'',
				chooseList:[],
			};
		},
		onLoad(option) {
			this.id = option.id;
			this.topid = option.topid;
			this.getHistoryList();
		},
		methods:{
			getHistoryList() {
				topsService.getHistoryList({
					dept_id:this.topid,
					topic_id:this.id,
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							this.list = res.data.topic
							this.chooseList = this.list.optionList;
							this.titles = res.data.topic.title;
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
			justify-content: center;
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
