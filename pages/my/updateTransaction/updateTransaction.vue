<template>
	<view class="main">
		<navBlack title="Update Transaction Password"/>
		<view class="content">
			<cell-pro title="Old Password" placeholder="Old Password" @updateText="updateText"/>
			<cell-pro title="New Password" placeholder="New Password"/>
			<cell-pro title="Confirm New Password" placeholder="Confirm New Password"/>
			<view class="my-btn">
				<van-button  block color="#6A5BFF"  type="info" @click="abc">Update</van-button>
			</view>
		</view>
	</view>
</template>

<script>
	import navBlack from '@/components/navBlack.vue'
	import cellPro from '@/pages/my/components/cellPro.vue'
	export default {
		components: {
			navBlack,
			cellPro
		},
		data() {
			return {
				oldPassword: '',  // 父组件中维护的 oldPassword 值
			}
		},
		onLoad() {
			
		},
		methods: {
			updateText(e){
				this.oldPassword = e
			},
			abc(){
				console.log(this.oldPassword);
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
	.content {
		width: 100%;
		flex: 1;
		overflow: auto;
		padding: 30rpx;
		background: #eee;
	}
	.my-btn {
		margin-top: 60rpx;
		width: 100%;
		/deep/.van-button--large {
			width: 100%;
		}
	}
</style>

