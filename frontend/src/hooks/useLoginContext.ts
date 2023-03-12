import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"

export const useLoginContext = () => {
    const loggedInContext = useContext(LoginContext);
    if(!loggedInContext){
        throw new Error('LoggedInContext has value : "null"')
    }
    return loggedInContext
}