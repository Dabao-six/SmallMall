<template>
	<view class="records-main">

		<van-tabs line-width="50px" title-active-color="#6A5BFF" color="#6A5BFF" v-model="active">
		  <van-tab title="All">
			  <scroll-view style="height: 100%;" scroll-y>
			  	<view class="scroll-view">
			  		<list />
			  	</view>
			  </scroll-view>
		  </van-tab>
		  <van-tab title="Pending">内容 2</van-tab>
		  <van-tab title="Completed">内容 3</van-tab>
		  <van-tab title="Undone">内容 4</van-tab>
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
				active: 0
			}
		},
		watch:{
			active(newVal, oldVal) {
			    // 在 active 发生变化时执行你的事件处理逻辑
			    console.log(`active 变化，新值为 ${newVal}，旧值为 ${oldVal}`);
			    // 在这里可以调用你的方法或者触发其他的逻辑

			  }
		},
		created() {
			this.active = 0
		},
		methods: {
			handleTabChange(e) {
				console.log(e);
				this.active = e
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-content {
		height: 100%;
		overflow: hidden;
	}
	.scroll-view {
		height: 100%;
		overflow: hidden;
	}
	.records-main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
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