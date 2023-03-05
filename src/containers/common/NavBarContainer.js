import React from "react";
import NavBar from "../../components/common/NavBar";

function NavBarContainer({pageNow}) {
    return (
            <NavBar pageNow={pageNow} />
    );
}

export default NavBarContainer;