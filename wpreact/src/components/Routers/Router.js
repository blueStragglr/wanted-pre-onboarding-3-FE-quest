import React from "react";
import { Route , Router } from "react-router-dom";
import Page1 from "../Body/Page1";
import Page2 from "../Body/Page2";
import Page3 from "../Body/Page3";

const Router = () => {
    return(
        <div>
            <Router>
                <Route path = '/Page1' element = {<Page1 />}></Route>
                <Route path = '/Page2' element = {<Page2 />}></Route>
                <Route path = '/Page3' element = {<Page3 />}></Route>
            </Router>
        </div>
    )
}

export default Router;