import { RouterItem } from "utils/router";
import { RouterInfo } from "utils/router";

interface SidebarItem{
    path: string, label: string, icon: SVGAElement    
}

export const SidebarContent: SidebarItem[] = (() =>
  RouterInfo.reduce((prev: SidebarItem[], current: RouterItem) => {
    if (current.withAuthorization)
      return [...prev, { path: current.path, label: current.label, icon: current.icon }];

      return prev
  },[]as SidebarItem[]))();
