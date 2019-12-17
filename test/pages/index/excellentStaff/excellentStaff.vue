<template>
	<!-- 优秀员工 -->
	<view class="staff">
		<titles :titles="titles" :showIcon="true"></titles>
		<view class="staff_content">
			<view class="staff_rule flex">
				<text>评选规则：选择1-4个你认为的先进集体</text>
			</view>
			<view class="staff_title">
				<text>候选名单</text>
			</view>
			<view class="staff_check">
				<checkbox-group @change="checkboxChange">
					<label v-for="item in value" :key="item.id">
						<view class="flex">
							<checkbox :value="item.value" color="#FFFFFF" />
							<text>{{item.value}}</text>
						</view>

					</label>
				</checkbox-group>
			</view>
			<view class="staff_btn">
				<view class="btn" @tap="sure">
					提交
				</view>
			</view>
			<!-- 弹出框 -->
			<view class="model" v-show="model">
				<view class="model_box" v-show="confirm">
					<view class="model_title">
						您此次投票选择的是：
					</view>
					<view class="model_content">
						<view class="model_list">
							1、战略营销部
						</view>
						<view class="model_list">
							1、战略营销部
						</view>
						<view class="model_list">
							1、战略营销部
						</view>
					</view>
					<view class="model_btn flex">
						<view class="btn_cansel flex">
							<text @tap="cansels">取消</text>
						</view>
						<view class="btn_confirm flex">
							<text @tap="confirms">确认提交</text>
						</view>
					</view>
				</view>
				<view class="model_box" v-show="!confirm">
					<view class="model_success flex">
						<image src="../../../static/img/good.png" mode="aspectFit"></image>
						<text>提交成功，感谢您的参与。</text>
						<view class="return" @tap="returns">
							返回
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				titles: '优秀员工评选',
				value: [{
						value: '1、战略营销部',
						id: 1
					},
					{
						value: '2、企业发展部',
						id: 2
					},
					{
						value: '3、市场开发部',
						id: 3
					},
					{
						value: '4、财务管理部',
						id: 4
					},
					{
						value: '5、"总经理办公室（行政服务中心）"',
						id: 5
					},
					{
						value: '6、董事会办公室',
						id: 6
					},
					{
						value: '7、人力资源部',
						id: 7
					},
					{

						value: '8、党群工作部',
						id: 8
					},
					{
						value: '9、纪检监察室',
						id: 9
					},
					{
						value: '10、审计部',
						id: 10
					},
					{
						value: '11、招标采购部',
						id: 11
					},
					{
						value: '12、安全生产部',
						id: 12
					},
					{
						value: '13、工程管理部',
						id: 13
					},

				],
				currentArr: [], // 当前用户想要的选项，最大为4
				oldArr: [], // 上一次的返回值
				hasPass: false ,// 用户之前是否选择过，是为true
				model:false,
				confirm:true,//是否显示
			};
		},
		methods: {
			checkboxChange(e) {
				console.log(e)
				if (e.detail.value.length > 4) { // 如果选择的个数超过4个
					uni.showToast({
						title: '无法选择更多',
						icon: 'none',
						position: 'bottom',
						duration: 3000,
					})
				}
			},
			sure(){
				this.model = true;
			},
			cansels(){
				this.model =false;
			},
			confirms(){
				this.confirm = false;
			},
			returns(){
				uni.switchTab({
				    url: '/pages/index/index'
				});
			},
		}
	}
</script>

<style lang="scss">
	.staff {
		padding-bottom: 58px;

		.staff_content {
			background: #FFFFFF;
			margin: 8px;
			padding: 8px 0 8px 0;
			position: relative;

			.staff_rule {
				background: #F2F7FF;
				color: #3D82FF;
				margin: 0px 8px 12px;
				padding: 8px 0 8px 12px;
				margin-bottom: 12px;
				justify-content: center;
				align-content: center;
				align-items: center;
				border-radius: 0.25rem;
			}

			.staff_title {
				width: 100%;
				text-align: center;
				font-size: $font-size16;
				font-weight: bold;
				margin-bottom: 24px;
			}

			.staff_check {
				checkbox-group {
					label {
						view {
							margin-bottom: 12px;
							padding-left: 16px;
							align-content: center;
							align-items: center;

							checkbox {
								width: 16px;
								height: 16px;
								margin-right: 12px;
							}

							text {
								font-size: $font-size14;
								color: #606265;
							}
						}
					}
				}
			}

			.model {
				width: 100%;
				height: 100vh;
				background-color: rgba(48, 49, 50, 0.5);
				position: fixed;
				top: 0;
				left: 0;

				.model_box {
					position: relative;
					background-color: #FFFFFF;
					margin: 0 16px;
					top: 150px;
					padding: 24px 16px;
					border-radius: 0.5rem;

					.model_title {
						font-size: $font-size18;
						color: #303132;
						font-weight: bold;
						margin-bottom: 14px;
					}

					.model_content {
						padding-left: 16px;
						margin-bottom: 20px;

						.model_list {
							color: #606265;
							margin-bottom: 12px;
							font-size: $font-size16;
						}
					}

					.model_btn {
						width: 100%;

						view {
							width: 50%;
							margin: 0 16px;
							justify-content: space-between;
						}

						text {
							white-space: nowrap;
							border-radius: 0.25rem;
							height: 42px;
							width: 120px;
							
			
							display: flex;
							align-content: center;
							align-items: center;
							justify-content: center;
							font-size: $font-size16;
						}

						.btn_cansel {
							justify-content: center;
							align-content: center;
							align-items: center;

							text {
								border: 1px solid #3D82FF;
								color: #3D82FF;
								box-sizing: border-box;

							}
						}

						.btn_confirm {
							justify-content: center;
							align-content: center;
							align-items: center;

							text {
								background: #3D82FF;
								color: #FFFFFF;

							}

						}
					}

					.model_success {
						flex-direction: column;
						justify-content: center;
						align-content: center;
						align-items: center;
font-size: $font-size16;
						image {
							width: 80px;
							height: 80px;
							margin-bottom: 12px;
						}
						text{
							color:#606265 ;
							
							margin-bottom: 32px;
						}
						.return{
							border: 1px solid #3D82FF;
							color: #3D82FF;
							box-sizing: border-box;
							height: 42px;
							width: 120px;
							display: flex;
							align-content: center;
							align-items: center;
							justify-content: center;
							border-radius: 0.25rem;
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
