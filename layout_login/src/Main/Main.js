import Header from "../Header/Header"
import Page from "../Page/Page"
import { Routes, Route } from 'react-router-dom'
import { pageList } from "../App"

function Main({ pages }) {
    return (
        <>
            <Header pages={pageList} />
            <Routes>
                {pages.map((page, index) => <Route key={index} path={page} element={<Page pageName={page} />} />)}
            </Routes>

        </>
    )
}

export default Main