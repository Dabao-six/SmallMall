<template>
	<view class="main">
		<navBlack title="My"/>
		<view class="content">
			<view class="my-top-card">
				<view class="top-card-top">
					<view class="top-card-img">
						<image src="../../static/images/user.png" mode="aspectFill"></image>
					</view>
					<view class="top-card-info">
						<view class="">
							ASDF
						</view>
						<view class="card-info-text">
							<view class="">
								Invitation Code: 
							</view>
							<view class="">
								ZVHRU8
							</view>
						</view>
					</view>
					<view class="top-card-logo">
						<view class="card-logo-img">
							<image src="../../static/images/1683135431630339970.png" mode="aspectFill"></image>
						</view>
						<view class="card-logo-text">
							VIP
						</view>
					</view>
				</view>
				<view class="top-card-midlle">
					<view class="card-midlle-top">
						<view class="">
							Credit Score:
						</view>
						<view class="">
							100%
						</view>
					</view>
					<view class="">
						<van-progress
						  :show-pivot="false"
						  :percentage="100"
						  stroke-width="8px"
						  pivot-color="#7232dd"
						  color="rgb(251, 221, 103)"
						/>
					</view>
				</view>
				<view class="top-card-bottom">
					<view class="card-bottom-box">
						<view class="">
							Wallet Amount
						</view>
						<view class="">
							205.77 USD
						</view>
					</view>
					<view class="card-bottom-box">
						<view class="">
							Commission
						</view>
						<view class="">
							7 USD
						</view>
					</view>
				</view>
			</view>
			<view class="my-title">
				My Financial
			</view>
			<list 
			@handleCellTop="handleTodeposit"
			@handleCellBottom="handleTowithdraw"
			toplogo="../../static/images/Event.png" 
			bottomlogo="../../static/images/Event.png" 
			toptext="Deposit" 
			bottomtext="Withdraw" 
			/>
			<view class="my-title">
				My Financial
			</view>
			<list
			@handleCellTop="handleToModify"
			@handleCellBottom="handleToPayment"
			toplogo="../../static/images/Event.png" 
			bottomlogo="../../static/images/Event.png" 
			toptext="Personal Information" 
			bottomtext="Payment Methods" 
			/>
			<view class="my-title">
				My Financial
			</view>
			<list 
			@handleCellTop="handleDialogShow"
			toplogo="../../static/images/Event.png" 
			bottomlogo="../../static/images/Event.png" 
			toptext="Ecads" 
			bottomtext="Ecads" 
			/>
			<view class="my-btn" @click="handleTologin">
				<van-button block color="rgb(175, 175, 199)" plain type="info" >Logout</van-button>
			</view>
			
			
		</view>
		<van-popup v-model="show" position="bottom"  closeable :style="{ height: '30%',width: '100%' }" >
			<view style="padding: 30rpx;display: flex;flex-direction: column; justify-content: center;width: 100%;">
				<view class="">
					<cell-pro title="New Password" placeholder="New Password"/>
				</view>
				
				<view class="my-btn">
					<van-button block color="#6A5BFF" round type="info">Submit</van-button>
				</view>
			</view>

		</van-popup>
		<myDialog :show="DialogShow" @CancelShow="CancelShow"></myDialog>
	</view>
</template>

<script>
	import myDialog from '@/components/myDialog.vue'
	import navBlack from '@/components/navBlack.vue'
	import list from '@/pages/my/components/list.vue'
	import cellPro from '@/pages/my/components/cellPro.vue'
	
	export default {
		components: {
			navBlack,
			list,
			cellPro,
			myDialog
		},
		data() {
			return {
				show:false,
				DialogShow:false
			}
		},
		onLoad() {
			
		},

		methods: {
			handleTologin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			handleTodeposit(){
				uni.navigateTo({
					url:'/pages/deposit/deposit'
				})
			},
			handleTowithdraw(){
				uni.navigateTo({
					url:'/pages/withdraw/withdraw'
				})
			},
			handleToModify(){
				uni.navigateTo({
					url:'/pages/my/modify/modify'
				})
			},
			handleDialogShow(){
				this.DialogShow = true
			},
			CancelShow(){
				this.DialogShow = false
			},
			handleToPayment(){
				this.show = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.van-dialog {
		overflow: initial !important;
	}
	.van-cell{
		box-shadow: 0px 0px 3px 2px #ddd;
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
		padding: 30rpx;
		background: #eee;
	}
	.my-title {
		font-weight: 600;
		padding: 30rpx 0;
	}
	.my-top-card {
		border-radius: 30rpx;
		width: 100%;
		overflow: hidden;
		padding: 30rpx;
		margin: 0 auto;
		background: url('../../static/images/profile_bg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		
	}
	.top-card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.top-card-img {
			width: 110rpx;
			height: 110rpx;
			border-radius: 50rpx;
			overflow: hidden;
		}
		.top-card-info {
			color: white;
			height: 90rpx;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			font-size: 28rpx;
			.card-info-text {
				

				display: flex;
				align-items: center;
			}
		}
		.top-card-logo {
			display: flex;
			flex-direction: column;
			align-items: center;
			.card-logo-img {
				width: 110rpx;
				height: 110rpx;
			}
		}
	}
	.top-card-midlle {
		.card-midlle-top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx 0;
			color: white;
		}
	}
	.top-card-bottom {
		margin-top: 60rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.card-bottom-box {
			color: white;
			display: flex;
			flex-direction: column;
			height: 90rpx;
			justify-content: space-between;
		}
	}
	.my-btn {
		margin-top: 60rpx;
		width: 100%;
		/deep/.van-button--large {
			width: 100%;
		}
	}

</style>