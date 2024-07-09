<template>
	<view class="main">
		<navTop />
		<view class="content">
			<home v-show="active === 0"/>
			<statrting  v-show="active === 1" />
			<records  v-show="active === 2" />
		</view>
		<tabbarBottom @handleTabChange="handleTabChange"/>
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
	}
	.content {
		width: 100%;
		flex: 1;
		overflow: hidden;
	}
</style>