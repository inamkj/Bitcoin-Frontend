import axios from "axios";
const Reg=async (email,password) =>{
    try{
        var response=await axios.post('http://192.168.1.23:8000/api/accounts/register/',{email,password});

    return response;
        }
        catch(error){
            console.log("Some error",error);
        }
}
export default Reg;