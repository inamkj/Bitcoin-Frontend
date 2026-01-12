import img from '../../public/images/chart.png'
import React, { useState } from 'react';
import Navbar from './navbar';
function Form(){
 
    const [low,setlow]= useState("");
    const [high,sethigh]=useState("");
    const[currentprice,setcurrentprice]=useState("");
    const[percent,setpercent]=useState("");

    function handlelow(event){
        setlow(event.target.value);
    }
    function handlehigh(event){
        sethigh(event.target.value);
    }
    function handleprice(event){
        setcurrentprice(event.target.value);
    }
    function handlepercent(event){
        setpercent(event.target.value);
    }

    function handleSubmit(){
        event.preventDefault();
        console.log("Low",low);
        console.log("high",high);
        console.log("Cuurent Price",currentprice);
        console.log("Percentage",percent);
    }

    return(
<>

<div className="form" id='form'>
    <h1>Enter Data for Prediction</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

<div className="form-data">
    <div className="form-left">
        <form id="form" onSubmit={handleSubmit} action="">
            <div className="form-control" >
                <label htmlFor="low">Low</label>
                <input type="number" name="low" id="low" value={low} onChange={handlelow} required/>
                <label htmlFor="high">High</label>
                <input type="number" name="high" id="high" value={high} onChange={handlehigh} required/>
                <label htmlFor="current-price">Current Price</label>
                <input type="number" name="current-price" id="current-price" value={currentprice} onChange={handleprice} required/>
                <label htmlFor="percent">Increase Percent</label>
                <input type="number" name="percent" id="percent" value={percent} onChange={handlepercent} required />
                <div>
                <button type="submit">Predict Now</button>
                </div>
            </div>
        </form>
    </div>
    <div className="form-right">
        <img src={img} alt="" />
    </div>
</div>
</div>
</>

    )
}

export default Form;
