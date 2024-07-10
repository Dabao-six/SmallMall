<template>
	<view class="main">
		<navBlack title="Terms and Conditions"/>
		<view class="content">
			
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
</style>
