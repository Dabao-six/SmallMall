<template>
	<view class="main">
		<navTop />
		<view class="content">
			<home v-if="active === 0"/>
			<statrting  v-if="active === 1" />
			<records  v-if="active === 2" />
			
		</view>
		<tabbarBottom @handleTabChange="handleTabChange"/>
		<view class="tips">
		
				<view class="tips-user">
					<image src="../../static/images/user.png" mode="aspectFill"></image>
				</view>
				<view class="tips-info">
					<view class="tips-info-top">
						<view class="">
							Hi, ah520533
						</view>
						<view class="tips-img">
							<image src="../../static/images/welcome.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="tips-info-bottom">
						Welcome Back
					</view>
				</view>
				
		</view>
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import tabbarBottom from '@/components/tabbarBottom.vue'
	
	import home from '@/pages/index/components/home/home.vue'
	import statrting from '@/pages/index/components/statrting/statrting.vue'
	import records from '@/pages/index/components/records/records.vue'
	export default {
		components: {
			navTop,
			tabbarBottom,
			home,
			statrting,
			records
		},
		data() {
			return {
				active:0
			}
		},
		onLoad() {
			
		},
		methods: {
			handleTabChange(e){
				console.log(e);
				this.active = e
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		overflow: hidden;
		position: relative;
	}
	.content {
		width: 100%;
		flex: 1;
		overflow: hidden;

	}
	.tips {
		position: absolute;
		left: 0;
		bottom: 15%;
		background-color: #000;
		display: flex;
		align-items: center;
		border-top-right-radius: 100rpx;
		border-bottom-right-radius: 100rpx;
		overflow: hidden;
		padding: 10rpx 20rpx;
		.tips-user {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50rpx;
			overflow: hidden;
			margin-right: 20rpx;
		}
		.tips-info {
			color: white;
			.tips-info-top {
				display: flex;
				align-items: center;
				.tips-img {
					margin-left: 20rpx;
					width: 40rpx;
					height: 40rpx;
				}
			}
			.tips-info-bottom {
				font-size: 24rpx;
			}
		}
	}
</style>