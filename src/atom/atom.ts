import { atom } from "recoil";

export const userIsVaild = atom({
  key: "userIsVaild",
  default: localStorage.getItem("user"),
});
