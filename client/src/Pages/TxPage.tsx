import Footer from "../Components/Footer";
import AssetWrapper from "../Wrapper/AssetWrapper";
import HistoryWrapper from "../Wrapper/HistoryWrapper";

const TxPage =() => {

    return(
    <div className="txpage">
        <h1>TxPage</h1>
        <HistoryWrapper/>
        <AssetWrapper/>
        <Footer/>
    </div>
    )
}
export default TxPage;