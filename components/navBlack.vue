<template>
	<view class="navBlack">
		<van-nav-bar
		  :title="title"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
	</view>

</template>

<script>
	export default {
		name: "navBlack",
		props: {
			title: {
				type: String,
				default: 'My'
			}
		},
		data() {
			return {

			};
		},
		created() {

		},
		methods: {
			onClickLeft(){
				uni.navigateBack({
					delta:1
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.navBlack {
		/deep/.van-nav-bar {
			background-color: #000 !important;
		}
		/deep/.van-nav-bar__title {
			color: white;
		}
		/deep/.van-icon {
			color: white;
		}
	}

</style>