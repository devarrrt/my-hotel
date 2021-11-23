import { createContext, useState } from "react";

export const Context = createContext(null)

const ContextApp = ({ children }) => {
    const [user, setUser] = useState(null)

    return <Context.Provider 
        value={{ user, setUser }}
    >
        {children}
    </Context.Provider>
}

export default ContextApp