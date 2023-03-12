import { createContext } from "react";

export type ThemeState = {
    isDark : boolean,
    setIsDark : React.Dispatch<React.SetStateAction<boolean>>
}

const themeKey = 'theme'

export const setThemeToStorage = (themeState: boolean) => {
    localStorage.setItem(themeKey, JSON.stringify(themeState))
}

export const getThemeFromStorage = () : boolean => {
    const savedTheme = localStorage.getItem(themeKey)
    if(!savedTheme) return false
    return JSON.parse(savedTheme)
}

export const ThemeContext = createContext<ThemeState | null>(null)