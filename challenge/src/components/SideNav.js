import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';


function SideNav () {

    let navigate = useNavigate();

    return(
        <div>
            <Sidebar style={{height:'100rem'}}>
                <Menu >
                    <MenuItem onClick={()=>{navigate('/pageA')}}>pageA</MenuItem>
                    <MenuItem onClick={()=>{navigate('/pageB')}}>pageB</MenuItem>
                    <MenuItem onClick={()=>{navigate('/pageC')}}>pageC</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}
export default SideNav;