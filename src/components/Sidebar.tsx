import SideMenu from './SideMenu';

const SideBar = () => {
  return (
    <div className="flex basis-40 shrink-0 border-r-2">
      <nav
        id="sidenav-3"
        className="flex z-1 -translate-x-full overflow-hidden translate-x-0 top-10"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-color="white"
      >
        <SideMenu />
      </nav>
    </div>
  );
};

export default SideBar;
