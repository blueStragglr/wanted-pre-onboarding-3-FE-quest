import './Sidebar.css'
import { Outlet } from 'react-router-dom'
import { Link, NavLink, useLocation } from "react-router-dom";
import db from '../../db/data.json';
const Sidebar = () => {
    const active = useLocation().pathname.replace('/', '');
    let contents = db.contents;
    return (
        <div className="container">
            <section className="box">
                <aside className="box-sidebar">
                    {
                        db.contents.map((data) => {
                            return (
                                <>

                                    <Link key={data.id} to={`/${data.content}`} style={{ textDecoration: "none", color: `${(active === '' ? 'A' : active) === data.content ? 'dodgerblue' : 'black'}` }}>
                                        <p>{`Page ${data.content}`}</p>
                                    </Link>
                                </>
                            )
                        })
                    }
                </aside>
                <div className="box-contents">
                    <Outlet />
                </div>
            </section>
        </div >
    )
}

export default Sidebar;