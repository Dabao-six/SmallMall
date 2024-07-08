<template>
	<view class="tabbar-bottom">
		<van-tabbar v-model="active" @change="handleTabChange">
			<!-- 自定义标签1 -->
			<van-tabbar-item v-for="(icon,index) in tabBar">
				<span>{{icon.text}}</span>
				<view v-show="index == 1" class="center-img">
					<img v-show="active != 1" src="/static/tabBar/starting2.png">
					<img v-show="active == 1" src="/static/tabBar/starting2_h.png">
				</view>
				<template #icon="props">

					<img :src="props.active? icon.inactive:icon.active"/>
				</template>
			</van-tabbar-item>

		</van-tabbar>

	</view>
</template>

<script>
	export default {
		name: "tabbarBottom",
		props: {
			// active:{
			// 	type: Number,
			// 	default: 0
			// }
		},
		data() {
			return {
				active: 0, // 默认选中第一个选项卡
				tabBar:[
					{
						text:'你的',
						active:'/static/tabBar/home.png',
						inactive:'/static/tabBar/home_h.png',
					},
					{
						text:'中间',
						active:'',
						inactive:'',
					},
					{
						text:'我的',
						active:'/static/tabBar/records.png',
						inactive:'/static/tabBar/records_h.png',
					}
				]
			};
		},
		created() {

		},
		methods: {
			handleTabChange(index) {
				console.log(index);
				this.active = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabbar-bottom .van-tabbar {
		box-shadow: 0 1px 6px #0003;
	}
	.center-img{
		top: 0%;
		left: 50%;
		transform: translate(-50%,-50%);
		position: absolute;
		width: 50px;
		height: 50px;
		z-index: 10;
		img {
			width: 100%;
			height: 100%;
		}
	}
</style>