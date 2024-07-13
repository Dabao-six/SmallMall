<template>
	<view class="main">
		<navBlack title="modify"/>
		<view class="content">
			<view class="cell-box">
				<van-cell title="Modify Personal Information" is-link  title-class="cell-title" size="large" :clickable="true" value="内容" @click="handleToModifyPersonal"/>
				<van-cell title="Username" is-link arrow-direction="arrow" size="large" value="用户001" />
				<van-cell title="Phone" is-link arrow-direction="arrow" size="large" value="1397994444" />
			</view>
			<view class="cell-box">
				<van-cell title="Update Password" is-link  title-class="cell-title" size="large" :clickable="true" @click="handleToupdatePassword" />
				<van-cell title="Update Transaction Password" is-link  title-class="cell-title" size="large" :clickable="true" @click="handleToupdateTransaction" />
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
			handleToModifyPersonal(){
				uni.navigateTo({
					url:'/pages/my/Personal/Personal'
				})
			},
			handleToupdatePassword(){
				uni.navigateTo({
					url:'/pages/my/updatePassword/updatePassword'
				})
			},
			handleToupdateTransaction(){
				uni.navigateTo({
					url:'/pages/my/updateTransaction/updateTransaction'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cell-box {
		margin-bottom: 60rpx;
	}
	.van-cell--large {
		padding-top: 15px;
		padding-bottom: 15px;
	}
	.cell-title {
		white-space: nowrap;
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
	
</style>
