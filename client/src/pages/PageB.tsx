import {useEffect} from "react";
import useCheckLogin from "../tools/useIsLogin";
import useIsLogin from "../tools/useIsLogin";

const PageB = () => {
    useIsLogin();
    return (<div className={'content'}>
        This is Page B!
    </div>)
};

export default PageB;