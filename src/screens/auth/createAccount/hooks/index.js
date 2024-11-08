import { useState } from "react"
import { navigate } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"

export function useHooks() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')
const [secure, setSecure] = useState(true)
    const handleLogin = () => {
        navigate(routes.signin)
    }

const toggle = () =>{
    setSecure(!secure)
}

    return { handleLogin, email, setEmail, password, setPassword, toggle, secure, name, setName }
}