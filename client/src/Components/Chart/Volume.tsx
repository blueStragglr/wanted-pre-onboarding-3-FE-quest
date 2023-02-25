type RtdArr = {
    addRtd:Array<Array<number|string>>
    rtd:Array<Array<number>>
    vol:Array<number>
    }
const Volume:React.FC<RtdArr> =({rtd,addRtd,vol}) => {

    const height = 160;
    const numYTicks = 4;
    let width = Number(document.body.querySelector('.candle')?.clientWidth)
    const x0 = 10;
    const y0 = 10;
    const yAxisLength = height - 20;
    const xAxisLength = width - 80;

    return(
    <div className="volume">
        <svg width={'100%'} height={height} >
            
            {/*----기본 가로 선----*/}
            <line
                x1={x0}
                y1={yAxisLength}
                x2={xAxisLength}
                y2={yAxisLength}
                stroke="#005469"
            />
            {/*----기본 세로 선----*/}
            <line
                x1={xAxisLength}
                y1={y0}
                x2={xAxisLength}
                y2={yAxisLength}
                stroke="#005469"
            />

            {/*----시세 세로 선----*/}
            {Array.from({ length: numYTicks }).map((_, index) => {
            const y = y0 + index * (yAxisLength / numYTicks) -10;
                return (
                    <g key={index}>
                    <line
                        className="lineLight"
                        x1={xAxisLength-1}
                        x2={x0}
                        y1={y}
                        y2={y}
                        stroke='#121212'
                    ></line>
                    <text
                        x={width}
                        y={y}
                        textAnchor="middle"
                        fontSize={Number(document.body.querySelector('.volume')?.clientWidth) < 800 ? 6 : 10}
                    >
                        {/* {xValue[index]} */}
                    </text>
                    </g>
                );
            })}
            {/*----시세 세로 선----*/}
            {/*----시세 세로 선----*/}
            {/*----시세 세로 선----*/}
            {/*----시세 세로 선----*/}
            
        </svg>    
    </div>
    )
}
export default Volume;