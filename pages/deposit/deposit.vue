<template>
	<view class="main">
		<navBlack title="deposit"/>
		<view class="content">
			<van-tabs line-width="50px" title-active-color="#6A5BFF" color="#6A5BFF" v-model="active">
			  <van-tab title="Deposit">
				  <scroll-view style="height: 100%;" scroll-y>
				  	<view class="scroll-view">
						<topCard />
						<view class="my-btn">
							<van-button block color="#6A5BFF"  type="info">Contact Customer Service</van-button>
						</view>
				  	</view>
				  </scroll-view>
			  </van-tab>
			  <van-tab title="History">
				  <scroll-view style="height: 100%;" scroll-y>
				  	<view class="scroll-view">
						
				  		<view class="list-box" v-for="i in 15">
				  			<view class="">
				  				202406235857160438512394240
				  			</view>
							<view class="list-box-midlle">
								USD 106
							</view>
							<view class="">
								2024-06-23 17:44:16
							</view>
				  		</view>
						
				  	</view>
				  </scroll-view>
			  </van-tab>
			</van-tabs>
		</view>
	</view>
</template>

<script>
	import navBlack from '@/components/navBlack.vue'
	import topCard from '@/pages/my/components/topCard.vue'
	
	export default {
		components: {
			navBlack,
			topCard
		},
		data() {
			return {
				active:0
			}
		},
		watch:{
			active(newVal, oldVal) {
			    // 在 active 发生变化时执行你的事件处理逻辑
			    console.log(`active 变化，新值为 ${newVal}，旧值为 ${oldVal}`);
			    // 在这里可以调用你的方法或者触发其他的逻辑

			  }
		},
		onLoad() {
			this.active = 0
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.list-box {
		padding: 30rpx;
		border-radius: 30rpx;
		width: 100%;
		height: 240rpx;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: #999;
		margin-bottom: 30rpx;
		.list-box-midlle {
			font-size: 32rpx;
			font-weight: 600;
			color: #6A5BFF !important;
		}
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
		background: #eee;
	}
	.my-btn {
		margin-top: 60rpx;
		width: 100%;
		/deep/.van-button--large {
			width: 100%;
		}
	}
	.scroll-view {
		padding: 30rpx;
	}
	/deep/.van-tabs {
		height: 100%;
	}
	/deep/.van-tabs__content {
		height: calc(100% - 44px);
	}
	/deep/.van-tab__pane {
		height: 100%;
	}
</style>
