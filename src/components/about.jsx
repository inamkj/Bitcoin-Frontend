import { useState } from 'react';
import img from '../../public/images/btc.jpg'
import LoginApi from '../apis/login_api';
import Navbar from './navbar';
import Button from 'react-bootstrap/Button';
import Register from '../apis/register_api';

function About(){

    const [key,setKey] = useState();

    const Test=async() =>{

        var response = await LoginApi();

        var data =response.data;
        console.log(data.key);
        setKey(data.key);

        
    }

    const register=async() =>{

       var  response =await Register();
       console.log(response.data.id);
    }
    return(
    <>

    <div className="section" id='about'>
      <div class="about">
        <div class="content-section">
            <div className="title">
                <h1>About Us</h1>
            </div>
            <div className="content">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing </h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut at eos eum aut qui quaerat sed. Laboriosam, cum. olor sit amet consectetur adipisicing elit. Ut at eos eum aut qui quaerat sed. Laboriosam, cum. </p>
                <button onClick={Test}>Read More</button>
                <Button onClick={register}>REad More</Button>
                {key}
            </div>
        </div>
        <div class="img-section">
            <img src={img} alt="" />
        </div>
      </div>
    </div>
    </>
    )
}
export default About;