<template>
		<view class="my-cell">
			<view class="cell-title">
				{{title}}
			</view>
			  <van-field
				 @input="updateText"
			    :placeholder="placeholder"
				:disabled="disabled "
			  />
		</view>
</template>

<script>
	export default {
		name: "cellPro",
		props: {
			title: {
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false
			}, 
		},
		data() {
			return {
				
			};
		},
		created() {

		},
		methods: {
			updateText(e){
				console.log(e);
				this.$emit('updateText',e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cell-title {
		font-weight: 600;
		padding: 30rpx 0;
	}
</style>