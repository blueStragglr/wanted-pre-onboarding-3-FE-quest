import { NavLink, LinkProps } from 'react-router-dom';
import { forwardRef } from 'react';
import { PATH } from '@/constants';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { useRecoilValue } from 'recoil';
import { drowerState } from '@/store/drowerState';

const menu = [
  {
    id: PATH.MAIN,
    name: '홈',
    icon: <HomeIcon />,
  },
  {
    id: PATH.COMMUNITY,
    name: '커뮤니티',
    icon: <MailIcon />,
  },
];

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

// eslint-disable-next-line react/display-name
const MyNavLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <NavLink
    ref={ref}
    {...props}
    className={({ isActive }) => (isActive ? props.className + ' Mui-selected' : props.className)}
  >
    {props.children}
  </NavLink>
));

function ListItemLink(props: ListItemLinkProps) {
  const drowerOpen = useRecoilValue(drowerState);
  const { icon, primary, to } = props;

  return (
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: drowerOpen ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItem component={MyNavLink} to={to}>
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: drowerOpen ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={primary} sx={{ opacity: drowerOpen ? 1 : 0 }} />
      </ListItem>
    </ListItemButton>
  );
}

const Menu = () => {
  return (
    <>
      {menu.map(({ id, name, icon }) => (
        <ListItem key={id} disablePadding sx={{ display: 'block' }}>
          <ListItemLink to={id} primary={name} icon={icon} />
        </ListItem>
      ))}
    </>
  );
};

export default Menu;
