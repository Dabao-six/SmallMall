<template>
	<view class="statrting-mian">
		<view class="">
			
			<view class="statrting-top">
				<view class="statrting-top-left">
					<view class="top-left-img1">
						<image src="../../../../static/images/user.png" mode="aspectFill"/> 
					</view>
					<view class="top-left-name">
						Hi, ah520533
					</view>
					<view class="top-left-img2">
						<image src="../../../../static/images/welcome.png" mode="aspectFill"/>
					</view>
				</view>
				<view class="statrting-top-right">
					VIP1
				</view>
			</view>
			
			<view class="statrting-top-list">
				<view class="top-list-item" v-for="item in 3">
					<view class="top-list-item-img">
						<image src="../../../../static/images/usdt2.png" mode="aspectFill"/>
					</view>
					<view class="top-list-item-info">
						<view class="item-info-top">
							<view class="item-info">
								Wallet Balance
							</view>
							<view class="">
								205.77
							</view>
						</view>
						<view class="item-info-bottom">
							<view class="item-info">
								Profits will be added here
							</view>
							<view class="">
								USD
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="common-title">
				Start Optimization (3/3)
			</view>
			
			<view class="statrting-product-box">
				<view class="product-box-top">
					<view class="box-top-item" v-for="item in 9">
						<view class="box-top-img">
							<image src="../../../../static/images/202309104815334114716590080.png" mode="aspectFit"/>
						</view>
					</view>
				</view>
				<view class="product-box-bottom">
					<view class="product-box-bottom-btn">
						Start (40/40) 
					</view>
				</view>
			</view>
			
			<view class="statrting-notice">
				<view class="statrting-notice-bg">
					
				</view>
				<view class="statrting-notice-info">
					<view class="notice-info-title">
						Notice
					</view>
					<view class="notice-info-info">
						Online Support Hours 09:30 - 21:30
						Please contact online support for your assistance!
					</view>
				</view>
			</view>
			

		</view>
	</view>
</template>

<script>
	export default {
		name: "statrting",
		components: {
		
		},
		props: {
			// active:{
			// 	type: Number,
			// 	default: 0
			// }
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
	.statrting-notice {
		padding: 30rpx 20rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 40rpx;
		.statrting-notice-bg {
			background: #eee;
			z-index: 1;
			border-top-left-radius: 40rpx;
			border-top-right-radius: 40rpx;
			width: 85%;
			height: 40rpx;
		}
		.statrting-notice-info {
			background: #fff;
			top: 80rpx;
			padding: 30rpx 20rpx;
			width: 90%;
			z-index: 2;
			display: flex;
			flex-direction: column;
			font-weight: 600;
			box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
			border-radius: 20rpx;
			margin-bottom: 40rpx;
			.notice-info-title,.notice-info-info {
				padding-bottom: 20rpx;
			}
		}
	}
	.statrting-product-box {
		background: #fff;
		margin: 0 auto;
		width: 90%;
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
		border-radius: 40rpx;
		.product-box-top {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.box-top-item {
				width: calc(100%/3);
				margin-bottom: 10rpx;
			}
			.box-top-img {
				padding: 20rpx;
				background: #f5f5f5;
				overflow: hidden;
				border-radius: 20rpx;
				width: 180rpx;
				height: 180rpx;
				margin: 0 auto;

			}
		}
		.product-box-bottom {
			margin-top: 30rpx;
			width: 100%;
			.product-box-bottom-btn{
				width: 90%;
				margin: 0 auto;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				background: #000;
				border-radius: 10rpx;
				color: white;
			}
		}
	}
	.common-title {
		padding: 30rpx;
		font-weight: 600;
		text-align: left;
	}
	.statrting-top-list {
		padding: 30rpx;
	}
	.top-list-item {
		background: #fff;
		padding: 20rpx;
		border-radius: 24rpx;
		overflow: hidden;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		.top-list-item-img {
			width: 100rpx;
			height: 100rpx;
		}
		.top-list-item-info {
			flex: 1;
			font-size: 28rpx;
			padding-left: 20rpx;
			height: 100rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			.item-info-top ,.item-info-bottom {
				font-weight: 600;
				display: flex;
				justify-content: space-between;
			}
			.item-info-bottom {
				font-weight: 500 !important;
			}
		}
	}
	
	
	.statrting-mian {
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		background: #f4f2f5;
	}
	.statrting-top {
		padding: 30rpx 30rpx 0 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}
	.statrting-top-left {
		display: flex;
		align-items: center;
		.top-left-img1 {
			width: 100rpx;
			height: 100rpx;
		}
		.top-left-name {
			margin: 0 20rpx;
		}
		.top-left-img2 {
			width: 60rpx;
			height: 60rpx;
		}
	}
</style>