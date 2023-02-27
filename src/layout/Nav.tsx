import useRoute from "../routes/hooks/useRoute";
import { ROUTE } from "../routes/types/route";
import { INavProps } from "./types/nav";
import NavView from "./views/NavView";

const Nav = () => {
  const [onRoute] = useRoute();

  const navProps: INavProps = {
    onRoutePageA: () => onRoute(ROUTE.PageA),
    onRoutePageB: () => onRoute(ROUTE.PageB),
    onRoutePageC: () => onRoute(ROUTE.PageC),
  };

  return <NavView {...navProps} />;
};

export default Nav;
