import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const authState = atom({
  key: "authState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
