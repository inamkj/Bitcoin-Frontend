import { Link } from 'react-router-dom';
import img from '../../public/images/btc-logo.webp'
import { CiHome } from "react-icons/ci";
import { MdOutlineRoundaboutRight } from "react-icons/md";

function Navbar(){

    return(
        <>
    
    <nav class="nav1">
        <h5>Bitcoin Needs Your Support</h5>
    </nav>
    <nav className="nav">

      <img src={img} alt="" />
      <div className="nav2">

        <Link to="/"><CiHome className='icon'/> Home</Link>
        <Link to="about"><MdOutlineRoundaboutRight/> About</Link>
        <Link to="form">Form</Link>
        <Link to="coins">Coins</Link>

      </div>
    </nav>

    

    
        </>
    )
}
export default Navbar;