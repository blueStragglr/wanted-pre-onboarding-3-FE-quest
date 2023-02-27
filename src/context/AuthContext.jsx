import React from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const getData = await fetch(
  //       "https://raw.githubusercontent.com/Kenny-Korea/JSON_Repository/main/FakeIds"
  //     );
  //     // await 하지 않으면 promise 객체를 바로 반환해버림
  //     const data = await getData.json();
  //     return data;
  //   };
  //   fetchData();
  //   return () => {
  //     fetchData();
  //   };
  // }, []);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
