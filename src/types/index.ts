export type RouterItem = {
  path: string;
  element: JSX.Element; //
  title: string;
  withAuthorization: boolean;
};

export type SideBarItem = {
  path: string;
  title: string;
};
