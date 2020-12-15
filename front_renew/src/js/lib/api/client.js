import axios from 'axios';



const client = axios.create();

client.defaults.baseURL = "http://13.124.166.15:80"

//헤더설정
// client.defaults.headers

//인터셉터설정
// client.interceptors.response.use(
// response => {
//     //요청성공시 다른작업진행
//     return response
// },
// error => {
//     //요청실패시 특정작업진행
//     return Promise.reject(error)
// }
// )


export default client;