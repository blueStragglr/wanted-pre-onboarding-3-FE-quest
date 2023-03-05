import React from "react";
import Main from "../components/Main";
import HeaderContainer from "../containers/common/HeaderContainer";
import NavBarContainer from "../containers/common/NavBarContainer";

function LandingPage() {
    return (
        <div>
            <HeaderContainer />
            <div style={{display:'flex'}}>
                <NavBarContainer pageNow='M'/>
                <Main />
            </div>
        </div>
    )
}

export default LandingPage;