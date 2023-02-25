
// SCSS
import './MainPage.scss'

// components
import Footer from "../Components/Footer";
import Limit from "../Components/Trade/Limit";
import Order from "../Components/Trade/Order";
import AssetWrapper from "../Wrapper/AssetWrapper";
import ChartWrapper from "../Wrapper/ChartWrapper";
import HistoryWrapper from "../Wrapper/HistoryWrapper";

type RtdArr = {
    addRtd:Array<Array<number|string>>
    rtd:Array<Array<number>>
    }

const MainPage:React.FC<RtdArr> =({rtd,addRtd}) => {

    return(
    <div className="mainpage">
        <div className='main_top'>
            <ChartWrapper rtd={rtd} addRtd={addRtd}/>
            <div className='main_top_order'>
                <Limit/>
                <Order/>
            </div>
        </div>
        <div className='main_body'>
            <HistoryWrapper/>
            <AssetWrapper/>
        </div>
        <Footer/>
    </div>
    )
}
export default MainPage;