<template>
	<view class="main">
		<navBlack title="Certificate"/>
		<view class="content">
			<view class="bg-img">
				<image src="../../static/images/1715902593067531253.png" mode="aspectFit"></image>
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
	.bg-img {
		padding: 20rpx;
		width: 100%;
		height: 100%;
	}
</style>
