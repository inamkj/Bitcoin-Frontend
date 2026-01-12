import { createContext, useContext, useState } from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import Details from "./details";



function DataMaping(){


    const [data,setData]= useState([
        {"img": "/images/coin03.png", 
            "coin": "BTC", 
            "fullname": "Bitcoin", 
            "price": "$58,303.99", 
            "change": "+0.01%", 
            "volume": "$35.28B", 
            "MarketCap": "$1,150.95B"
        },
        {
            "img": "/images/coin5.png", 
            "coin": "ETH", 
            "fullname": "Ethereum", 
            "price": "$2,608.80", 
            "change": "-1.14%", 
            "volume": "$16.51B", 
            "MarketCap": "$313.78B"
        },
        {
            "img": "/images/coin06.png", 
            "coin": "USDT", 
            "fullname": "TetherUS", 
            "price": "$1.00", 
            "change": "+0.01%", 
            "volume": "$56.60B", 
            "MarketCap": "$116.53B"
        },
        {
            "img": "/images/coin10.png", 
            "coin": "BNB", 
            "fullname": "BNB", 
            "price": "$518.80", 
            "change": "-0.25%", 
            "volume": "$1.65B", 
            "MarketCap": "$75.71B"
        }
    ]);
    
    
    const [list1,setlist]=useState([{"name":"Abc","id":"21"}, {"name":"Abdcsac","id":"21"}, {"name":"Abdvc","id":"21"}]);

    return (
        <>
          {/* {data.map((item, index) => (
                <div className="containerbox" key={index}>
                    <div className="outerbox">
                        <div className="box">
                            <div className="inner">
                                <img src={item.img} alt="Avatar" className="avatar" />
                                <div>
                                    <h3>{item.coin}</h3>
                                    <h5>{item.fullname}</h5>
                                </div>
                            </div>
                            <div className="innerbox">
                                <h3>{item.price}</h3>
                                <h3 className={item.change.includes('-') ? 'negative' : 'positive'}>
                                    {item.change}
                                </h3>
                                <h3>{item.volume}</h3>
                                <h3>{item.MarketCap}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))} */}
<Details prop={data} />
</>

           
        
    )
}

export default DataMaping;