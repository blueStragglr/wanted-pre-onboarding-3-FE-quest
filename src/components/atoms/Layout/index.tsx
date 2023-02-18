import Box from '@mui/material/Box';
import { DrawerHeader } from '@/styles/muiStyles';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
