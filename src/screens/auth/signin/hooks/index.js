import { useState } from "react"
import { navigate } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"

export function useHooks() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [secure, setSecure] = useState(true)
const forgot = () =>{
navigate(routes.forgot)
}
    const handleLogin = (email, password) => {
        navigate(routes.app)
    }
    const handleSignup = () =>{
        navigate(routes.createAccount)
    }
const toggle = () =>{
    setSecure(!secure)
}

    return {forgot, handleLogin, email, setEmail, password, setPassword, toggle, secure, handleSignup }
}