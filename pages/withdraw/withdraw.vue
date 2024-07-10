<template>
	<view class="main">
		<navBlack title="withdraw"/>
		<view class="content">
			<van-tabs line-width="50px" title-active-color="#6A5BFF" color="#6A5BFF" v-model="active">
			  <van-tab title="Withdraw">
				  <scroll-view style="height: 100%;" scroll-y>
				  	<view class="scroll-view">
						<topCard />
						
						<view class="my-title">
							My Financial
						</view>
						<van-cell title="USD 106"  />
						<view class="my-title">
							My Financial
						</view>
						<van-cell title="USD 106"  />
						
						<view class="my-btn">
							<van-button block color="#6A5BFF"  type="info">Withdraw</van-button>
						</view>
				  	</view>
				  </scroll-view>
			  </van-tab>
			  <van-tab title="History">
					<view class="tabs-tabs" >
						<van-tabs type="card" background="#fff" color="#6A5BFF" title-inactive-color="#6A5BFF" title-active-color="#fff">
							<van-tab title="标签 1">
								<scroll-view style="height: 100%;" scroll-y>
									<view class="scroll-view">
											<view class="" v-for=" i in 100">
													标签 1 内容	
											</view>				
									</view>
								</scroll-view>
							</van-tab>
							<van-tab title="标签 2">								
							<scroll-view style="height: 100%;" scroll-y>
									<view class="scroll-view">
										<view class="" v-for=" i in 100">
												标签 2 内容	
										</view>				
									</view>
							</scroll-view>
							</van-tab>
							<van-tab title="标签 3">
								<view class="card-tab-view">
									<scroll-view style="height: 100%;" scroll-y>
											<view class="scroll-view">
												<view class="" v-for=" i in 100">
														标签 3 内容	
												</view>
											</view>
									</scroll-view>
								</view>

							</van-tab>
						</van-tabs>
					</view>
				  	<scroll-view style="height: 100%;" scroll-y>
				  		<view class="scroll-view">
				  							
				  							
				  							
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
		onLoad() {
			this.active = 0
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.tabs-tabs {
		height: 100%;
		padding-top: 60rpx;
	}
	.my-title {
		color:#999;
		font-weight: 600;
		padding: 30rpx;
	}
	.van-cell__title {
		color: #999;
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
	.card-tab-view {
		height: 100%;
		overflow: auto;
	}
	/deep/.van-tabs__nav--card {
	    height: 40px !important;
	}
	/deep/.van-tabs--card>.van-tabs__wrap {
	    height: 40px !important;
	}
	/deep/.van-tabs {
		height: 100%;
	}
	/deep/.van-tabs__content {
		height: calc(100% - 44px);
	}
	/deep/.van-tab__pane {
		height: 100%;
		overflow: hidden;
	}
</style>
