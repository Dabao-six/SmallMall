<template>
	<view class="my-cell">
		<view class="my-cell-top" @click="handleCellTop">
			<view class="cell-top-left">
				<view class="cell-top-left-img">
					<image :src="toplogo" mode="aspectFill"></image>
				</view>
				<view class="cell-top-left-text">
					{{toptext}}
				</view>
			</view>
			<view class="cell-top-right">
				<van-icon name="arrow" size="28rpx"/>
			</view>
		</view>
		<view class="my-cell-bottom" @click="handleCellBottom">
			<view class="cell-top-left">
				<view class="cell-top-left-img">
					<image :src="bottomlogo" mode="aspectFill"></image>
				</view>
				<view class="cell-top-left-text">
					{{bottomtext}}
				</view>
			</view>
			<view class="cell-top-right">
				<van-icon name="arrow" size="28rpx"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "mycell",
		props: {
			toptext: {
				type: String,
				default: ''
			},
			toplogo: {
				type: String,
				default: ''
			},
			bottomtext: {
				type: String,
				default: ''
			},
			bottomlogo: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			};
		},
		created() {

		},
		methods: {
			handleCellTop() {
				this.$emit('handleCellTop'); // 触发自定义事件
			},
			handleCellBottom(){
				this.$emit('handleCellBottom'); // 触发自定义事件
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-cell {
		border-radius: 30rpx;
		overflow: hidden;
		margin: 20rpx 0;
		background-color: white;
		.my-cell-top,.my-cell-bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 30rpx;
			.cell-top-left {
				display: flex;
				align-items: center;
				.cell-top-left-img {
					width: 60rpx;
					height: 60rpx;
					margin-right: 20rpx;
				}
			}
		}
		.my-cell-bottom {

			border-top: 1px solid #eee !important;

		}
	}
</style>