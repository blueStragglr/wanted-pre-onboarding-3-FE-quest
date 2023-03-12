import React, { useEffect, useReducer, useState } from 'react'
import { ILoggedIn, LoginContext, loginReducer } from './LoginContext'
import { getThemeFromStorage, setThemeToStorage, ThemeContext } from './ThemeContext'

interface IContextProps{
    children:React.ReactNode
}

const defaultLoginState : ILoggedIn = {
    isLoggedIn : false,
    name : ''
}

const ContextProvider : React.FC<IContextProps> = ({children}) => {
    const [isDark, setIsDark] = useState<boolean>(false)
    const [loginState, loginDispatch] = useReducer(loginReducer, defaultLoginState)
    // * 페이지가 처음 렌더링 됐을 때 로컬 스토리지에 저장된 theme 가 있는지 확인하고 있다면 setIsDark 함수를 호출해서 상태를 변경
    useEffect(() => {
        const savedTheme = getThemeFromStorage()
        if(savedTheme){
            setIsDark(savedTheme)
        } 
    }, [])

    useEffect(() => {
        setThemeToStorage(isDark)
    }, [isDark])

  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
        <LoginContext.Provider value={{state:loginState, dispatch:loginDispatch}}>
            {children}
        </LoginContext.Provider>
    </ThemeContext.Provider>

  )
}

export default ContextProvider