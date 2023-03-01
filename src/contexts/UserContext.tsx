import React, { createContext } from "react";

export const UserContext = createContext<{
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>> | null;
}>({
  user: null,
  setUser: null,
});
