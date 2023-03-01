import { atom } from "recoil";

export const sidebarState = atom({
  key: "sidebarState",
  default: location.pathname.slice(1),
});
