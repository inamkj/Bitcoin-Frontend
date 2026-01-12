import { useState } from "react";
import PracLoginApi from "../apis/prac_loginApi";

function PracLogin(){

    const [username,setUsername]= useState('');
    const [email,setEmail]= useState('');   
    const [password,setPassword]= useState('');

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
        const response = await PracLoginApi(username,email,password)
        var data=response.data
        console.log("Login Successful",data);
        }
        catch(error){
            console.log("Error in Login",error)
        }
    }
    return(
        <>
          <form id="formrlogin" onSubmit={handleSubmit} action="">
            <div className="form-control">
            <h1>Login Form</h1>
                <label >Username</label>
                <input type="text" required value={username} onChange={(e)=>setUsername(e.target.value)} />

                <label >Email</label>
                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
            
                <label >Password</label>
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
            
            <button type="submit">Login</button>
            
            </div>
        </form>
        
        
        </>
    )
}
export default PracLogin