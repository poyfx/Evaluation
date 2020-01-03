<template>
	<view class="appraisal">
		<titles :titles="titles" :showIcon="true"></titles>
		<view class="appraisal_content">
			<view class="appraisal_list" v-for="(item ,index) in list" :key="index" :ref="index">
				<view class="list_title flex">
					<view class="list_left">
						{{index+1}}、{{item.title}}
						<text>（权重{{item.weight}}%）</text>
					</view>
					<text class="scores">已评分</text>
					<text class="score">未评分</text>
				</view>
				<view class="list_content">
					<text>{{item.content}}</text>
				</view>
				<view class="list_score flex">
					<text>评分：</text>
					<radio-group class="flex" @change="radioChange">
						<label class="flex" v-for="item in items" :key="item.value">
							<view>
								<radio :value="item.value" :checked="option[index] == item.value" @tap="choose(index)" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
				</view>
			</view>

			<view class="staff_btn">
				<view class="btn" @tap="sure" v-show="show">
					保存
				</view>
				<view class="btn" @tap="back" v-show="!show">
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
				titles: '员工考评',

				items: [{
						value: '20',
						name: '很差',
						checked: false
					},
					{
						value: '40',
						name: '不及格',
						checked: false
					},
					{
						value: '60',
						name: '及格',
						checked: false
					},
					{
						value: '80',
						name: '良好',
						checked: false
					},
					{
						value: '100',
						name: '优秀',
						checked: false
					},
				],
				id: '',
				topid: '',
				list: [], //选项数组
				chooselist: [], //选中分数数组
				idx: '', //选择分数的下标
				content: '',
				num: '', //选择员工下标
				examineeList: [],
				option: [],
				show: true,
			};
		},
		onLoad(option) {
			this.num = option.index;
			this.id = option.id || '';
			this.topid = option.topid || '';
			this.getAssessments()
			this.examineeLists()
		},

		methods: {
			radioChange: function(e) {

				this.content = e.target.value


			},
			choose(idx) {
				this.idx = idx
				this.chooselist.splice(idx, 1, this.content)
				console.log(this.chooselist)
			},
			getAssessments() {
				const assessment = uni.getStorageSync('assessment')
				try {
					if (assessment) {
						console.log(assessment)
						this.list = assessment.optionList;
						this.examineeList = assessment.examineeList;
							this.chooselist.length = this.list.length;
					}
				} catch (e) {
					//TODO handle the exception
				}
		
			},
			examineeLists() {
				if (this.examineeList[this.num].score == null) {
					console.log(this.examineeList[this.num].score)
					console.log(1)

					this.show = true;
					// if()
				} else {
					console.log(2)
					this.option = this.examineeList[this.num].options.split(",");
					this.show = false;

				}
			},
			focus(e) {
				console.log(e)
				this.actives = true
			},
			blue() {
				this.actives = false
			},
			sure() {
				const option = String(this.chooselist)
				topsService.getOneAssessment({
					dept_id: this.id,
					topic_id: this.topid,
					examinee: this.examineeList[this.num].examinee,
					options: option,
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							uni.switchTab({
								url: '/pages/index/index'
							});
						} else {
							uni.showModal({
								title: '提示',
								content: res.data.msg,
							})
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
			back() {
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

					.scores {
						color: #54D29B;
						font-size: $font-size12;
					}

					.score {
						color: #FAA52D;
						font-size: $font-size12;
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

					radio-group {
						label {
							align-content: center;
							align-items: center;

							radio {
								transform: scale(0.5);
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
