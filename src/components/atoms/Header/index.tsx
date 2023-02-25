import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { DROWERWIDTH } from '@/constants';
import { useRecoilState } from 'recoil';
import { drowerState } from '@/store/drowerState';
import Logout from '@mui/icons-material/Logout';
import { PATH } from '@/constants';
import { useNavigate } from 'react-router-dom';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DROWERWIDTH,
    width: `calc(100% - ${DROWERWIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = () => {
  const [drowerOpen, setDrowerOpen] = useRecoilState(drowerState);
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setDrowerOpen(true);
  };

  const gotoLogin = () => navigate(`${PATH.AUTH}/${PATH.LOGIN}`, { replace: true });

  return (
    <AppBar position="fixed" open={drowerOpen}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(drowerOpen && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          wanted Pre-onboarding course
        </Typography>
        <div onClick={gotoLogin}>
          <Logout />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
