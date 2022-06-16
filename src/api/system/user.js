import Jotter from "@/api"
import qs from 'qs'

//登录
export function login(data) {
	console.log(data)
  return Jotter({
    url: '/doLogin',
    method: 'post',
    data
  })
}
var funcs={
	login
}
export default funcs