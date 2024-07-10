<template>
	<view class="main">
		<view class="content">
			<view class="register-top">
				<view class="logo">
					<image src="../../static/nav/logo.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="register-text">
				Register Now
			</view>
			<view class="register-box">
				<view class="form-account" v-for="i in 5">
					<view class="form-label">
						Username/Phone
					</view>
					<view class="form-input">
						<input placeholder="Username/Phone" />
					</view>
				</view>
				<view class="form-password">
					<view class="form-label">
						Password
					</view>
					<view class="form-input">
						<view class="">
							<van-radio-group v-model="radio" direction="horizontal">
							  <van-radio name="1" icon-size="18px">Male</van-radio>
							  <van-radio name="2" icon-size="18px">Female</van-radio>
							</van-radio-group>
						</view>
					</view>
				</view>
				<view class="form-password">
					<view class="form-label">
						Invite Code
					</view>
					<view class="form-input">
						<input placeholder="Invite Code" />
					</view>
				</view>
				<view class="agree">
					<view class="">
						<van-icon name="checked" size="18px" color="#6A5BFF"/>
					</view>
					<view style="padding-left: 20rpx;">
						I agree with <text @click="handleTotc" style="text-decoration: underline;color: #6A5BFF;margin-left: 20rpx;">Terms and Conditions</text>
					</view>
				</view>
				<view class="next-btn">
					<image src="../../static/images/GO.png" mode="aspectFill"></image>
				</view>
			</view>
			
			<view class="back" @click="handleTologin">
				Back to Login
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		components: {
	
		},
		data() {
			return {
				radio:1
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
			handleTotc(){
				uni.navigateTo({
					url:'/pages/register/tc/tc'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.back {
		margin-top: 100rpx;
		width: 100%;
		padding: 20rpx 0 80rpx 0;
		font-size: 38rpx;
		text-decoration: underline;
		text-align: center;
	}
	.next-btn {
		position: absolute;
		width: 140rpx;
		height: 140rpx;
		overflow: hidden;
		border-radius: 70rpx;
		bottom: -70rpx;
		left: 50%;
		transform: translate(-50%,0);
		z-index: 10;
		background-color: #6A5BFF;
		padding: 40rpx;
	}
	.agree {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 30rpx 0;
		margin-bottom: 80rpx;
	}
	.register-box {
		border-radius: 20rpx;
		background: #fff;
		padding: 30rpx;
		position: relative;
		z-index: 1;
	}
	.form-account,.form-password {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 28rpx 0;
		border-bottom: 1px solid #eee;
		.form-label {
			font-weight: 600;
			font-size: 28rpx;
		}
		.form-input input{
			text-align: right;
		}
	}
	.register-text {
		width: 100%;
		padding: 20rpx 0 80rpx 0;
		font-size: 28rpx;
		font-weight: 600;
		text-align: center;
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
		padding: 40rpx;
		background: #eee;
	}
	.logo-top {
		width: 100%;
		height: 40%;
	}
	.logo {
		margin: 16% auto;
		width: 300rpx;
		height: 130rpx;
	}
</style>
