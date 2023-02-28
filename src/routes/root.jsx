import Layout from 'components/Layout/Layout';
import { Outlet } from 'react-router';

function Root() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}
export default Root;