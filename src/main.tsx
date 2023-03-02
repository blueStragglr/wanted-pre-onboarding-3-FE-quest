import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./global/globalStyles";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
