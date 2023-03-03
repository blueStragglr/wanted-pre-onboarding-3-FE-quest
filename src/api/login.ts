export const loginApi = (info: ILogin) => {
    if (info.email === "ID" && info.password === "PWD") {
        localStorage.setItem("Login", "성공");
        return true;
    }
    localStorage.removeItem("Login");
    return false;
};
