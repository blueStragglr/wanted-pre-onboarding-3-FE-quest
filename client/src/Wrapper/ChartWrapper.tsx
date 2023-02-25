import Candle from "../Components/Chart/Candle";
import Volume from "../Components/Chart/Volume";
import { dataToArray } from "../Function/dataToArray";
type RtdArr = {
    addRtd:Array<Array<number|string>>
    rtd:Array<Array<number>>
    }
const ChartWrapper: React.FC<RtdArr> =({rtd,addRtd}) => {
    let date = dataToArray(addRtd,0)
    let open = dataToArray(addRtd,1)
    let close =dataToArray(addRtd,2)
    let high =dataToArray(addRtd,3)
    let low =dataToArray(addRtd,4)
    let vol =dataToArray(addRtd,5)


    return(
    <div className="chartwrapper">
        <h1>ChartWrapper</h1>
        <Candle 
            rtdPrice={rtd[0]} 
            addRtd={addRtd}
            date={date}
            open={open}
            close={close}
            high={high}
            low={low}
            

            />
        <Volume rtd={rtd} addRtd={addRtd} vol={vol}/>
    </div>
    )
}
export default ChartWrapper;