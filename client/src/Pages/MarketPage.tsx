import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import './MarketPage.scss'
const MarketPage =() => {

    return(
    <div className="marketpage">
        <div className="marketpage_wrapper">
            <Sidebar></Sidebar>
            <div className="market">
                <h1>MarketPage</h1>
                <div className="NFT_1"></div>
                <div className="NFT_1"></div>
                <div className="NFT_1"></div>
                <div className="NFT_1"></div>
                <div className="NFT_1"></div>
            </div>
        </div>
    </div>
    )
}
export default MarketPage;