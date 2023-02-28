import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
const Sidebar =() =>{
    return(
        <div style={{position : "fixed", left :"0px", height : "100%", width : "200px", top : "75px", color : "black", backgroundColor : "whitesmoke"}}>
           <ul>
            <Link to= '/'><li>main</li></Link>
            <Link to= '/second'><li>second</li></Link>
            <Link to= '/third'><li>third</li></Link>
           </ul>
        </div>
    )
}
export default Sidebar