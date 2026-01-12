import About from "../components/about";
import Navbar from "../components/navbar";


function Aboutpage(){

    return(
        <>
        <div className="main">
            <Navbar/>
        
            <div className="container">
                <h1>About Us</h1>
            </div>
            <About/>
        </div>
        
        </>
    )
}
export default Aboutpage;