import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import NavBarContainer from "../containers/common/NavBarContainer";
import CContainer from "../containers/CContainer";

function PageC() {
    return (
        <div>
            <HeaderContainer />
            <div style={{display:'flex'}}>
                <NavBarContainer pageNow='C'/>
                <CContainer />
            </div>
        </div>
    )
}

export default PageC;