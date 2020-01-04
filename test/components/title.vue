<template>
	<view class="self_header">
		<view class="self_header_bar">
			<view class="top_view"></view>
		</view>
		<view class="title_content">
			<view class="self_header_title flex">
				<view class="leftBtn" @tap="back" v-show="showIcon">
					<uni-icons type="arrowleft" size="27"></uni-icons>
				</view>
				<view>{{titles}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			titles: {
				type: String,
				value: '',
			},
			showIcon:{
				type:Boolean,
				value:true,
			}
		},
		data() {
			return {

			};
		},
		methods: {
			back() {
				// uni.switchTab({
				//     url: '/pages/index/index'
				// });
				uni.navigateBack({
					delta:1
				})
			},
		},
		components: {
			// uniIcon
		}
	}
</script>

<style lang="scss">

/* 头部定位保持宽高 */
.title_content {
	width: 100%;
	height: 44px;
	position: relative;
}

.self_header {
	flex-direction: column;
}

/* 手机顶部 */
.self_header_bar {
	height: var(--status-bar-height);
	width: 100%;
	background-color: #FFFFFF;
}

.top_view {
	height: var(--status-bar-height);
	width: 100%;
	position: fixed;
	background-color: #FFFFFF;
	top: 0;
	z-index: 9999;
}

/* 标题 */
.self_header_title {
	width: 100%;
	height: 44px;
	padding: 7px 3px;
	box-sizing: border-box;
	/* background-color: black; */
	position: fixed;
	align-content: center;
	align-items: center;
	align-self: center;
	background-color: #FFFFFF;
	justify-content: center;
	color: #303132;
	font-size: 36upx;
	z-index: 997;
	font-weight: bold;

}
/* 左边返回图标 */
.leftBtn {
	width: 25px;
	height: 25px;
	margin-left: 5px;
	position: absolute;
	left: 6px;
	top: 20%;
	color: #616161;
}
</style>
