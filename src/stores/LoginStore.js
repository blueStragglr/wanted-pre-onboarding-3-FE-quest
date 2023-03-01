import { action, observable, makeObservable } from "mobx";

class LoginStore {
  pageLoginStatus = {
    A: false,
    B: false,
    C: false,
  };

  validatePageName(pageName) {
    const hasPage = pageName in this.pageLoginStatus;
    if (!hasPage) {
      throw new Error("The page doesn't exist.");
    }
  }

  login(pageName) {
    this.validatePageName(pageName);
    this.pageLoginStatus[pageName] = true;
  }
  logout(pageName) {
    this.validatePageName(pageName);
    this.pageLoginStatus[pageName] = false;
  }

  constructor() {
    makeObservable(this, {
      pageLoginStatus: observable,
      login: action,
      logout: action,
    });
  }
}

const loginStore = new LoginStore();

export default loginStore;
