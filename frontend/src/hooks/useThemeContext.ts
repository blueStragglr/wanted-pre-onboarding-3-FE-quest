import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const useThemeContext = () => {
    const themeContext = useContext(ThemeContext)
    if (!themeContext) {
        throw new Error('ThemeContext has value : "null"')
    }
    return themeContext
}