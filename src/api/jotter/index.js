import Jotter from "@/api"
import qs from 'qs'

//获取 所有笔记对象
function getJotters(){
    return Jotter({
        url: '/getJotters',
        method: 'get'
    })
}
function delectJotters(id){
    return Jotter({
        url: '/delectJotters/'+id,
        method: 'get'
    })
}

var funcs={
	getJotters,
	delectJotters
}
export default funcs