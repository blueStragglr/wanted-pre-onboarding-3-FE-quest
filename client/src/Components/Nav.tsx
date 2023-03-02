import { Link } from "react-router-dom";

type Price = {
    currentPrice: number,
};
const Nav =(currentPrice:Price) => {

    return(
    <div className="nav">
        <div className="nav_right">
            <Link to={'/market'}>
                <h3>Market</h3>
            </Link>
            <Link to={'/mint'}>
                <h3>Mint</h3>
            </Link>
        </div>
        <h1>{currentPrice.currentPrice}</h1>
        <div className="nav_left">
            <Link to={'/rank'}>
                <h3>Rank</h3>
            </Link>
            <Link to={'/ranker'}>
                <h3>Transaction</h3>
            </Link>
        </div>
    </div>
    )
}
export default Nav;