interface ILoginInfo {
  id: string;
  passWord: string;
}
const request = {
  login: function (loginInfo: ILoginInfo) {
    const { id, passWord } = loginInfo;
    if (id === "woony" && passWord === "1234") return "success";
    return "fail";
  },
};

export default request;
