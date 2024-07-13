<template>
	<view class="home">
		<view class="home-video">
			<video  :controls="false" muted  :playsinline="true" :loop="true" :autoplay="true" object-fit="fill"
				src="/static/home2.mp4"></video>
			<view class="home-notice">
				<van-notice-bar @click="handleToNotifications" background="#fff" left-icon="volume-o" scrollable text="技术是开发它的人的共同灵魂。" />
			</view>
		</view>
		<view class="home-product">
			<view class="product">
				<view class="product-item" v-for="item in 8" @click="handleTo(item)">
					<view class="item-box">
						<view class="item-img">
							<image src="../../../../static/images/Event.png" mode="aspectFill"></image>
						</view>
						<view class="item-text">
							Event
						</view>
					</view>

				</view>
			</view>
		</view>

		<view class="home-more">
			<view class="home-more-top">
				<view class="more-top-text">
					Vip Levels
				</view>
				<view class="more-top-right" @click="login">
					<view class="more-top-text">
						View More
					</view>
					<view class="more-top-img">
						<image src="../../../../static/images/more1.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<view class="home-more-bottom">
				<view class="more-card-box" v-for=" item in 4">
					<view class="more-card">
						<view class="card-top">
							<view class="card-top-img">
								<image src="../../../../static/images/1683135431630339970.png" mode="aspectFill">
								</image>
							</view>
							<view class="card-top-info">
								<view class="top-info-max">
									VIP2
								</view>
								<view class="top-info-mini">
									500.00USD
								</view>
							</view>
						</view>
						<view class="card-top-text">
							Profit per transaction 0.60% tasks contains 45 each order
						</view>
					</view>
				</view>
			</view>
		</view>
		<myDialog :show="show" @CancelShow="CancelShow"></myDialog>

	</view>
</template>

<script>
	import myDialog from '@/components/myDialog.vue'
	export default {
		name: "home",
		components: {
			myDialog
		},
		props: {
			// active:{
			// 	type: Number,
			// 	default: 0
			// }
		},
		data() {
			return {
				show: false
			}
		},
		created() {

		},
		methods: {
			handleTo(item) {
				if (item == 1) {
					this.show = true
				}
				if (item == 2) {
					this.handleToEvent()
				}
				if (item == 3) {
					this.handleTodeposit()
				}
				if (item == 4) {
					this.handleTowithdraw()
				}
				if (item == 5) {
					this.handleToClause()
				}
				if (item == 6) {
					this.handleToCertificate()
				}
				if (item == 7) {
					this.handleToClause()
				}
				if (item == 8) {
					this.handleToClause()
				}
			},
			handleToCertificate() {
				uni.navigateTo({
					url: '/pages/Certificate/Certificate'
				})
			},
			handleToClause() {
				uni.navigateTo({
					url: '/pages/Clause/Clause'
				})
			},
			handleToEvent() {
				uni.navigateTo({
					url: '/pages/Event/Event'
				})
			},
			handleTodeposit() {
				uni.navigateTo({
					url: '/pages/deposit/deposit'
				})
			},
			handleTowithdraw() {
				uni.navigateTo({
					url: '/pages/withdraw/withdraw'
				})
			},
			handleToNotifications(){
				uni.navigateTo({
					url: '/pages/Notifications/Notifications'
				})
			},
			CancelShow() {
				this.show = false
			},
			login() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.van-dialog {
		overflow: initial !important;
	}

	.home-more-bottom {
		// padding: 20rpx;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.more-card-box {

			width: calc(100%/2);

			padding: 30rpx;

			.more-card {
				padding: 32rpx;

				display: flex;
				flex-direction: column;
				align-items: center;
				border-radius: 26rpx;
				overflow: hidden;
				background-color: #F6F5F7;

				.card-top {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.card-top-img {
						width: 100rpx;
						height: 100rpx;
					}

					.card-top-info {

						display: flex;
						flex-direction: column;

						.top-info-max {
							font-size: 32rpx;
						}

						.top-info-mini {
							padding-top: 10rpx;
							font-size: 26rpx;
						}
					}
				}

				.card-top-text {
					margin-top: 20rpx;
					font-size: 26rpx;
					line-height: 32rpx;
				}
			}
		}

	}

	.home-more {
		.home-more-top {
			padding: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.more-top-text {
				font-weight: 600;
				font-size: 32rpx;
			}

			.more-top-right {
				display: flex;
				align-items: center;

				.more-top-img {
					margin-left: 10rpx;
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
	}

	video {
		outline: none;
		/* 移除视频获取焦点时的默认边框 */
		width: 100%;
		height: 100%;
	}

	.home {
		width: 100%;
		height: 100%;
		overflow-y: scroll;

		.home-video {
			width: 100%;
			height: 200px;
			position: relative;

			.home-notice {
				box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
				/* 水平偏移量 垂直偏移量 模糊半径 颜色 */
				overflow: hidden;
				border-radius: 16px;
				left: 50%;
				bottom: -40rpx;
				transform: translate(-50%, 0);
				width: 90%;
				position: absolute;
			}
		}
	}

	.home-product {
		padding: 60rpx 20rpx 20rpx 20rpx;
		background-color: #ECEBFF;

		.product {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.product-item {
				margin-bottom: 20rpx;
				width: calc(100%/4);

				.item-box {
					margin: 0 auto;
					width: 80%;
					padding: 10rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					background-color: #fff;
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
					/* 水平偏移量 垂直偏移量 模糊半径 颜色 */
					border-radius: 16rpx;

					.item-img {
						width: 70rpx;
						height: 70rpx;
					}

					.item-text {
						font-size: 24rpx;
					}
				}

			}
		}
	}
</style>