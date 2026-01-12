import axios from "axios";
const PracLoginApi=async (username,email,password)=>{

    try{
    var response=await axios.post('http://192.168.1.23:8000/api/accounts/login/',{username,email,password})
    return response;
    }
    catch(error){
        console.log("Some error in LoginApi",error)
    }
}
export default PracLoginApi;