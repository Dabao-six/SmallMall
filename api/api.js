import request from '@/utils/request.js';

//获取gid
export function getSigin(data) {
	return request.post('/api/OpenApi/In?action=get_yxim_sign', data)
}
//获取IM 的token
export function getSiginToken(data) {
	return request.post('/api//OpenApi/In?action=get_yxim_token', data)
}
