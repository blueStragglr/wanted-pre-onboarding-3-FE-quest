import { ROUTE } from "../routes/types/route";
import useRoute from "../routes/hooks/useRoute";
import { IHeaderProps } from "./types/header";

import HeaderView from "./views/HeaderView";
import { useDispatch } from "react-redux";
import { logout } from "../features/login/store/loginStore";

const Header = () => {
  const [onRoute] = useRoute();
  const dispatch = useDispatch();

  const handleLogoutButtonClick = () => {
    onRoute(ROUTE.Login);
    dispatch(logout());
  };

  const headerProps: IHeaderProps = {
    onClickLogoutButton: handleLogoutButtonClick,
  };

  return <HeaderView {...headerProps} />;
};

export default Header;
