<template>
	<view class="main">
		<navTop />
		<view class="content">
			
		</view>
		<tabbarBottom />
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import tabbarBottom from '@/components/tabbarBottom.vue'
	export default {
		components: {
			navTop,
			tabbarBottom
		},
		data() {
			return {
				title: 'Hello',
				 active: 0  // 默认选中第一个选项卡
			}
		},
		onLoad() {

		},
		methods: {
			handleTabChange(index) {
			  this.active = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>