
import About from "./about";
import Navbar from "./navbar";
import Form from "./form";
import DataMaping from "./datamaping";
import Details from "./details";
function Home(){


    return (
        <>
  
    <div class="Container" id="home">
    <div class="left">
        <h4>Welcome to <span>BitCoin</span> Price Prediction</h4>
        <h1><span>Bitcoin</span> is an innovative payment network and a new kind of money.</h1>
          <div className='btns'>
          <button className='btn1'>Predict Now</button>
            <button className='btn1'>Choose Your Wallet</button>
            <button className='btn2'>Buy BitCoin</button>
          </div>
    </div>   
  </div>
  <About/>
<Form/>
<DataMaping/>


        </>
    )
}

export default  Home;