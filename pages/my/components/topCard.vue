<template>
		<view class="card-item">
			<view class="card-item-top">
				{{topName}}
			</view>

			<view class="card-item-middle">
				<view class="item-middle-price">
					{{middlePrice}}							
					<text class="item-middle-unit">
					{{middleUnit}}
					</text>
				</view>
			</view>
			<view v-if="bottomText" class="card-item-bottom">
				{{bottomText}}
			</view>
		</view>
</template>

<script>
	export default {
		name: "topCard",
		props: {
			topName: {
				type: String,
				default: 'Account Amount'
			},
			middlePrice: {
				type: String,
				default: '205.77'
			},
			middleUnit:{
				type: String,
				default: 'USD'
			},
			bottomText: {
				type: String,
				default: 'You will receive your withdrawal within an hour'
			},

		},
		data() {
			return {

			};
		},
		created() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.card-item {
		border-radius: 30rpx;
		width: 100%;
		overflow: hidden;
		padding: 30rpx;
		margin: 30rpx auto;
		background: url('../../../static/images/profile_bg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		.card-item-top {
			color: white;
			padding-bottom: 30rpx;
		}
		.card-item-middle {
			padding-top: 30rpx;
			display: flex;
			color: white;
			.item-middle-price {
				font-weight: 600;
				font-size: 64rpx;
				.item-middle-unit {
					margin-left: 20rpx;
					font-weight: 500;
					font-size: 28rpx;
				}
			}
		}
		.card-item-bottom {
			padding-top: 30rpx;
			color: white;
		}
	}
</style>