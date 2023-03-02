import './SideBar.scss';
import {pageData} from "../App";
import {Link} from "react-router-dom";
import {useState} from "react";


const SideBar = () => {
    const [sideKey, setSideKey] = useState("a");

    const handleSideClick = (pageKey: string) => () => {
        setSideKey(pageKey)
    }
    return (
        <nav id={"side-bar"}>
            {pageData.map((page, index) => {
                return <Link to={`/page-${page.key}`}
                             key={index}
                             className={sideKey === page.key?'focus':""}
                             onClick={handleSideClick(page.key)}>
                    {`Page-${page.key.toUpperCase()}`}
                </Link>;
            })}</nav>

    )
}
export default SideBar;