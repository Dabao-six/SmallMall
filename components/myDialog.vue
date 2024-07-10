<template>
		<van-dialog v-model="show"  :showConfirmButton="false">
			<view class="my-dialog">
				<van-cell icon="shop-o" title="CS-0215" is-link  title-class="cell-title" size="large" :clickable="true" />
				<van-cell icon="shop-o" title="CS-4541" is-link  title-class="cell-title" size="large" :clickable="true" />
				<view class="my-dialog-close" @click="CancelShow">
					Cancel
				</view>
			</view>
		</van-dialog>
</template>

<script>
	export default {
		name: "listRow",
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				
			};
		},
		created() {

		},
		methods: {
			CancelShow() {
				this.$emit('CancelShow'); // 触发自定义事件
			},
		}
	}
</script>

<style lang="scss" scoped>

	.van-cell--large{
		border-top-left-radius: 30rpx;
		border-bottom-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
	}
	.my-dialog {
		position: relative;
	}
	.my-dialog-close {
		position: absolute;
		left: 50%;
		bottom: -40%;
		transform: translate(-50%,0);
		color: #6A5BFF;
		font-size: 32rpx;
	}
</style>