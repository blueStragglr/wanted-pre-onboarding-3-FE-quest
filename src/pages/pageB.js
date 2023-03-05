import React from "react";
import BContainer from "../containers/BContainer";
import HeaderContainer from "../containers/common/HeaderContainer";
import NavBarContainer from "../containers/common/NavBarContainer";

function PageB() {
    return (
        <div>
            <HeaderContainer />
            <div style={{display:'flex'}}>
                <NavBarContainer pageNow='B'/>
                <BContainer />
            </div>
        </div>
    )
}

export default PageB;