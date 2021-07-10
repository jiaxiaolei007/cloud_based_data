import axios from 'axios'

export function request(config, success, failure) {
  // 1 创建axios实例
  const instance = axios.create({ methods: 'get', timeout: 5000 })

  // 2 添加拦截器，拦截之后需要把其return出去
  instance.interceptors.request.use(config =>{ 
    console.log('拦截到的请求内容:', config); 
    // 什么时候需要拦截请求：
    // 1 config中信息不符合服务器规则；
    // 2 每次发送网络请求时，需要在界面显示请求的图标
    // 3 某些网络请求（用户登录token），需要携带特殊的信息
    return config 
  },
    err => console.log(err))

  instance.interceptors.response.use(res=>{
    // console.log('拦截到的响应内容:',res);
    // return res
  },
    err=>console.log(err))
  // 3 返回实例
  return instance(config)
}