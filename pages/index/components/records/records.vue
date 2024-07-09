<template>
	<view class="records-main">
<!-- 		<van-tabs v-model="activeName" >
		  <van-tab background="#6A5BFF" title-active-color="#6A5BFF" title="标签 1" name="a">

			  
		  </van-tab>
		  <van-tab title="标签 2" name="b">内容 2</van-tab>
		  <van-tab title="标签 3" name="c">内容 3</van-tab>
		  <van-tab title="标签 3" name="d">内容 4</van-tab>
		</van-tabs> -->
		<van-tabs v-model="active" color="#6A5BFF" title-active-color="#6A5BFF" swipeable>
		  <van-tab v-for="index in 4" :title="'选项 ' + index">
		    <scroll-view style="height: 100%;" scroll-y>
				  <view class="scroll-content">
					<list />
				  </view>
		    </scroll-view>
		  </van-tab>
		</van-tabs>
	</view>
</template>

<script>
	import list from '@/pages/index/components/records/components/list.vue'
	export default {
		name: "records",
		components: {
			list
		},
		props: {
			// active:{
			// 	type: Number,
			// 	default: 0
			// }
		},

		data() {
			return {
				active:'',
				activeName:'a'
			}
		},
		created() {
			this.activeName = 'a'
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
	.scroll-content {
		padding: 20rpx;
	}
	.records-main {
		width: 100%;
		height: 100%;
	}
</style>