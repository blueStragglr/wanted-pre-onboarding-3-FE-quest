import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Sidebar />
            </main>
        </div>
    )
}

export default Layout;