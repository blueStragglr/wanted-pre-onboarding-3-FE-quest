import React from 'react';
import { Link, Route } from 'react-router-dom';
function Side(props) {
    return (
        <Link to={props.link}>
            <div className="side">
                <div className='list'>
                    <p className={props.activate ? 'activate' : "noEvent"}>{props.name}</p>

                </div>
            </div>
        </Link>
    );
}
function SideWrap(props) {
    // props.activate 
    // activate="true"
    return (
        <div className='sideWrap'> <Side link="/" name="Page A"  /><Side name="Page B" link = "b"/><Side name="Page C" link = "c" /></div>
    );

}
export default SideWrap;