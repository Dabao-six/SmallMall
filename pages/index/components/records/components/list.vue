<template>
	<view class="list">
		<view v-for="i in 20" class="list-box">
			<view class="list-outside">
				<view class="time">
					2024-06-23 17:46:50
				</view>
				<view class="btn">
					Completed
				</view>
			</view>
			<view class="list-main">
				<view class="list-main-top">
					<view class="list-img">
						<image src="../../../../../static/images/202309104815334114716590080.png" mode="aspectFill"></image>
					</view>
					<view class="list-info">
						<view class="list-info-title">
							construction work shoes S3 shoes work men safety work shoes boots
						</view>
						<view class="list-info-bottom">
							<view class="info-bottom-price">
								USD 110
							</view>
							<view>
								<van-icon v-for="i in 5"  color="rgb(255, 210, 30)" name="star" size="36rpx"/>
							</view>
						</view>
					</view>
				</view>
				<view class="list-main-bottom">
					<view class="list-main-bottom-box" v-for="i in 2">
						<view class="main-bottom-box-name">
							Total Amount
						</view>
						<view class="main-bottom-box-price">
							USD 110
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
export default {
		name: "list",
		props: {
			// active:{
			// 	type: Number,
			// 	default: 0
			// }
		},

		data() {
			return {
				activeName:'a'
			}
		},
		created() {
			
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.list {
		height: 100%;
		overflow: auto;
		padding: 30rpx;
		background-color: #e5e7eb;
	}
	.list-box {
		margin-bottom: 40rpx;
	}
	.list-outside {
		padding: 10rpx 0;
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		.time {
			font-size: 28rpx;
			color: #666;
		}
		.btn {
			font-size: 24rpx;
			border-radius: 10rpx;
			padding: 10rpx;
			color: #fff;
			background-color:#6A5BFF;
		}
	}
	.list-main {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 26rpx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		.list-main-top {
			display: flex;
			padding: 20rpx 0;
			.list-img {
				width: 120rpx;
				height: 120rpx;	
			}
			.list-info {
				padding-left: 20rpx;
				flex:1;
				overflow: hidden; /* 超出部分隐藏 */
				.list-info-title {
					color: #666;
					font-weight: 600;
					padding-bottom: 20rpx;
					width: 100%;
					overflow: hidden; /* 超出部分隐藏 */
					white-space: nowrap; /* 不换行 */
					text-overflow: ellipsis; /* 超出显示省略号 */
				}

				.list-info-bottom {
					display: flex;
					align-items: center;
					justify-content: space-between;
					.info-bottom-price {
						font-size: 28rpx;
					}
				}
			}

		}
		.list-main-bottom {
			
			display: flex;
			flex-wrap: nowrap;
			.list-main-bottom-box {
				width: calc(100%/3);
				height: 80rpx;
				display: flex;
				flex-direction: column;
				
				justify-content: space-between;
				.main-bottom-box-name {
					font-size: 24rpx;
				}
				.main-bottom-box-price {
					color: #6A5BFF;
					font-size: 28rpx;
					font-weight: 600;
				}
			}
		}
	}
</style>