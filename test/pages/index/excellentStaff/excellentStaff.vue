<template>
	<!-- 优秀员工 -->
	<view class="staff">
		<titles :titles="titles" :showIcon="true"></titles>
		<view class="staff_content">
			<view class="staff_rule flex">
				<text>{{content.remark}}</text>
			</view>
			<view class="staff_title">
				<text>候选名单</text>
			</view>
			<view class="staff_check">
				<checkbox-group @change="checkboxChange">
					<label v-for="(item,index) in value" :key="item.id">
						<view class="flex">
							<checkbox  :value="String(item.id)" :disabled="check.length >= content.max && !check.includes(String(item.id))" color="#FFFFFF" />
							<text>{{index+1}}、{{item.title}}</text>
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
						<view class="model_list" v-for="(item,index) in checkContet" :key="index">
							{{index+1}}、{{item.title}}
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
	import topsService from '@/api/topies.js'
	export default {
		
		data() {
			return {
				titles: '优秀员工评选',
				value: [],//页面显示list
				model:false,
				confirm:true,//是否显示
				id:'',
				topid:'',
				check:[],//选中数组id
				content:{
					max:'',
					remark:'',
				},
				checkContet:[],
				options:'',//选中的id
			};
		},
		onLoad(option) {
			this.id = option.topid;
			this.topid = option.id
			
			this.gettop()
		},
		
		methods: {
			gettop(){
				console.log(this.id,this.topid)
				topsService.getTopiesInfo({
					dept_id:this.id,
					topic_id:this.topid,
					success:res=>{
						console.log(res)
						const data =  res.data.topic
						if(res.statusCode == 200 && res.data.code == 0){
							this.content.max = data.maxVote || '';
							this.content.remark = data.remark || '';
							this.titles = data.title || '',
							this.value = data.optionList || '';
						}
					},
					fail:err=>{
						console.log(err)
					},
					complete:res=>{
						console.log(res)
					},
				})
			},
			checkboxChange(e) {
				console.log(e)
			
				this.check = e.detail.value
			},
	
			sure(){
				if(this.check != ''){
					this.checkContet=[];
					console.log(this.check)
					this.model = true;
					this.check.map(el=>{
						for(let i=0;i<this.value.length;i++ ){
							console.log(el,this.value[i].id)
							if(el == this.value[i].id){
								this.checkContet.push(this.value[i])
							}
						}
						
					})
				}else{
					uni.showModal({
						content:'请先投票'
					})
				}
				
				
			},
			cansels(){
				this.model =false;
			},
			confirms(){
				this.options = this.check.toString()
				
				topsService.getVote({
					dept_id:this.id,
					topic_id:this.topid,
					options:this.options,
					success:res=>{
						console.log(res)
						if(res.statusCode == 200 && res.data.code == 0){
							this.confirm = false;
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
