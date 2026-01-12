import axios from "axios"

const LoginApi=async()=>{
   var response =await axios.post(
    "hhttp://192.168.1.23:8000/api/accounts/login/" ,
    
    {username:"Akhlaq",email:"engrwaleed86@gmail.com",password:"123456"}

)

return response;


}
export default LoginApi;