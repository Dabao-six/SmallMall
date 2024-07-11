
// export var baseUrl = 'http://im.inheart.cn';//线上
export var baseUrl = 'http://192.168.0.252:8001';//测试
function getHeaders() {
	let header = {
		'Content-Type': 'application/x-www-form-urlencoded',
	}
	return header
}

export default {
	get(url, param) {
		return new Promise((resolve, reject) => {
			uni.request({
				method: 'GET',
				timeout: 8000, // 设置超时时间为5秒
				url: baseUrl+ url,
				data: param,
				header: getHeaders()
			}).then(res => {
				if(res[1].data.res_code){
					resolve(res[1])
				}else{
					reject(res)
				}
			}).catch(err => {
				uni.stopPullDownRefresh();
				uni.hideLoading();
				reject(err);
				uni.showToast({
						title: '请求超时！',
						icon: 'none'
					})
			})
		})
	},

	post(url, param, config = {}) {
		return new Promise((resolve, reject) => {
			uni.request({
				method: 'POST',
				timeout: 8000, // 设置超时时间为5秒
				url: baseUrl + url,
				data: param,
				header: getHeaders(),
			}).then(res => {
				if(res[1].data.res_code){
					resolve(res[1])
				}else{
					reject(res)
				}
				
			}).catch(err => {
				uni.stopPullDownRefresh();
				uni.hideLoading();
				reject(err);
				uni.showToast({
						title: '请求超时！',
						icon: 'none'
					})
			})
		})
	},
}