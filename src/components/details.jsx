//import { useContext, useEffect, useState } from "react";
//import dataprovider from "./providers";

import { Link } from "react-router-dom";

function Details({prop}) {
    // const [data, setData] = useState([]);
    // const usedata = useContext(dataprovider);

    // useEffect(() => {
    //     // Set data with the value from usedata when usedata changes
    //     if (usedata && usedata.length > 0) {
    //         setData(usedata);
    //     }
    // }, [usedata]); // Dependency array ensures this runs when usedata changes

    return(
        <>
            
           
           {prop.map((item, index) => (
            <Link to="coindetails" state={{ coin: item }} className="link" >
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
                </Link>
            ))} 
       
        </>
    )

   
}

export default Details;
