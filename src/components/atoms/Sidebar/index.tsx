import { useTheme } from '@mui/material/styles';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Menu from './Menu';
import { useRecoilState } from 'recoil';
import { drowerState } from '@/store/drowerState';
import { Drawer, DrawerHeader } from '@/styles/muiStyles';

const Sidebar = () => {
  const theme = useTheme();

  const [drowerOpen, setDrowerOpen] = useRecoilState(drowerState);

  const handleDrawerClose = () => {
    setDrowerOpen(false);
  };

  return (
    <Drawer variant="permanent" open={drowerOpen}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <Menu />
      </List>
    </Drawer>
  );
};

export default Sidebar;
