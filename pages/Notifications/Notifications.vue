<template>
	<view class="main">
		<navBlack title="Notifications"/>
		<view class="content">
			<scroll-view style="height: 100%;" scroll-y>
				<view class="scroll-view">
									
					<view class="list-box" v-for="i in 15">
						<view class="list-box-top">
							Working hours
						</view>
						<view class="list-box-midlle">
							Eastern working hours:09:30 a.m. to 21:30 p.m. Good luck with your work.
						</view>
						<view class="list-box-bottom">
							2024-06-23 17:44:16
						</view>
					</view>
									
				</view>
			</scroll-view>
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
	.scroll-view {
		padding: 30rpx;
	}
	.list-box {
		padding: 30rpx;
		border-radius: 30rpx;
		width: 100%;
		height: 240rpx;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 30rpx;
		.list-box-top {
			font-size: 30rpx;
			font-weight: 600;
			color: #090909;
		}
		.list-box-midlle {
			font-size: 28rpx;
			color: #666;
		}
		.list-box-bottom {
			font-size: 26rpx;
			color: #cfcfcf
		}
	}
</style>
