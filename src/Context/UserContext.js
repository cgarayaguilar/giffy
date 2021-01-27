import React, { useState } from 'react'

export const UserContext = React.createContext({})

const UserContextProvider = ({ children }) => {
    const [jwt, setJwt] = useState(null)

    return (
        <UserContext.Provider value={{ jwt, setJwt }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
