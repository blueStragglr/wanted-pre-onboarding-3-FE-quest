import { action, observable } from "mobx";

class SidebarStore {
  @observable activePage = "";

  @action setActivePage = (pageName) => {
    this.activePage = pageName;
  };
}

const sidebarStore = new SidebarStore();

export default sidebarStore;
