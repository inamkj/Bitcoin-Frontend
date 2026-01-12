import { useState } from "react";
import Reg from "../apis/prac-reg-api";

function PracReg(){

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
        var response=await Reg(email,password);
        console.log("Registration Successful",response);
        
        }
        catch(error){
            console.log("Some error in Registration",error);
        }
    }

    return(
        <>
        <form id="formreg" onSubmit={handleSubmit} action="">
            <div className="form-control">
            <h1>Registration Form</h1>
                <label >Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            
                <label >Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            
            <button type="submit">Register</button>
            </div>
        </form>
        
        </>
    )
}
export default PracReg;