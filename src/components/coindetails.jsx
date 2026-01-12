import { useLocation } from "react-router-dom";
function Coindetails() {

   
    const location = useLocation();
    const coin = location.state.coin;
  
    if (!coin) {
      return <h1>Coin data not found</h1>;
    }
  
    return (
      <div className="coin-details-container">
        <div className="coin-header">
          <img src={coin.img} alt={coin.fullname} className="coin-image"/>
          <div>
            <h1>{coin.fullname} ({coin.coin})</h1>
            <h3>Price: {coin.price}</h3>
          </div>
        </div>
        <div className="coin-stats">
          <p><strong>Change:</strong> <span className={coin.change.includes('-') ? 'negative' : 'positive'}>{coin.change}</span></p>
          <p><strong>Volume:</strong> {coin.volume}</p>
          <p><strong>Market Cap:</strong> {coin.MarketCap}</p>
        </div>
      </div>
    );
  }
  
  export default Coindetails;