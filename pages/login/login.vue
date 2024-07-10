<template>
	<view class="main">
		<view class="logo-top">
			<view class="logo">
				<image src="../../static/nav/logo.png" mode="aspectFill"></image>
			</view>
		</view>

		<view class="form">
			<view class="form-account">
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
					<input placeholder="Password" />
				</view>
			</view>
			<view class="login-btn" @click="handleTohome">
				<van-button  block color="#6A5BFF"  type="info" >Login</van-button>
			</view>
			<view class="login-text-mini">
				Don't have an account? Create now!
			</view>
			<view class="login-text-max" @click="handleToRegister">
				Create Account
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
			handleTohome(){
				uni.navigateTo({
					url:'/pages/index/index'
				})
			},
			handleToRegister(){
				uni.navigateTo({
					url:'/pages/register/register'
				})
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
		position: fixed;
		overflow: hidden;
	}
	.form {
		padding: 40rpx;
		width: 100%;
		
		.form-account,.form-password {
			
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 30rpx 0;
			border-bottom: 1px solid #e5e7e;
			.form-label {
				font-weight: 700;
			}
			.form-input input{
				text-align: right;
			}
		}

	}
	.login-text-mini {
		text-align: center;
		padding-top: 30rpx;
		font-size: 24rpx;
		color: #cfcfcf;
	}
	.login-text-max {
		text-align: center;
		padding-top: 30rpx;
		font-size: 32rpx;
		font-weight: 700;
	}
	.logo-top {
		width: 100%;
		height: 40%;
	}
	.logo {
		margin: 30% auto;
		width: 300rpx;
		height: 130rpx;
	}
	.login-btn {
		margin-top: 60rpx;
		width: 100%;
		/deep/.van-button--large {
			width: 100%;
		}
	}
</style>
