<template>
	<view class="main">
		<navBlack title="Personal Information"/>
		<view class="content">
			<view class="user-box">
					<view class="user-img">
						<image src="../../../static/images/user.png" mode="aspectFill"></image>
					</view>
				<view class="user-chang">
					<view class="user-chang-text">
						Tap to change
					</view>
					<view class="">
						<van-icon name="edit" size="18px"/>
					</view>
				</view>
				<view class="my-btn">
					<van-button block color="#6A5BFF"  type="info">Update</van-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navBlack from '@/components/navBlack.vue'
	
	export default {
		components: {
			navBlack,
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.user-img {
		width: 140rpx;
		height: 140rpx;
		border-radius: 50rpx;
		overflow: hidden;
	}
	.user-chang {
		display: flex;
		margin: 40rpx 0 40rpx 0;
		.user-chang-text {
			color: #999;
			padding-right: 20rpx;
		}
	}
	.user-box {
		padding: 50rpx 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.main {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		position: fixed;
		overflow: hidden;
	}
	.content {
		width: 100%;
		flex: 1;
		overflow: auto;
		padding: 30rpx;
		background: #eee;
	}
	.my-btn {
		margin-top: 60rpx;
		width: 100%;
		/deep/.van-button--large {
			width: 100%;
		}
	}
</style>
