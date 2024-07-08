<template>
	<view class="heard-box">
		<view class="heard-logo">
			<image src="/static/nav/logo.png" mode="aspectFit" />
		</view>
		<view class="heard-user">
			<image src="/static/nav/me.png" mode="aspectFit" />
		</view>
	</view>
</template>

<script>
	export default {
		name: "navTop",
		props: {
			navMenu: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {

			};
		},
		created() {

		},
		methods: {
			handleMenu() {
				this.$emit('handleMenu'); // 触发自定义事件
			},
		}
	}
</script>

<style lang="scss" scoped>
	image {
		width: 100%;
		height: 100%;
	}
	.heard-box {
		
		width: 100%;
		padding: 24rpx 16rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.heard-logo {
			width: 192rpx;
			height: 88rpx;
		}
		.heard-user {
			width: 64rpx;
			height: 64rpx;
		}
	}
</style>