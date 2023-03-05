import React from "react";
import AContainer from "../containers/AContainer";
import HeaderContainer from "../containers/common/HeaderContainer";
import NavBarContainer from "../containers/common/NavBarContainer";

function PageA() {
    return (
        <div>
            <HeaderContainer />
            <div style={{display:'flex'}}>
                <NavBarContainer pageNow='A'/>
                <AContainer />
            </div>
        </div>
    )
}

export default PageA;