import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "../features/login/store/loginStore";

const store = configureStore({
  reducer: { login: loginSlice },
});

export default store;
