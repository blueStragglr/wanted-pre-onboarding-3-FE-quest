import { useEffect } from "react";

import { AUTH_KEY } from "./constants/constant";
import { useAuthContext } from "./Context/AuthContextProvider";
import { Routers } from "./Routers";

function App() {
  const { setState, loginService } = useAuthContext();
  useEffect(() => {
    const response = loginService.get(AUTH_KEY);
    setState(response);
  }, []);
  return <Routers />;
}

export default App;
