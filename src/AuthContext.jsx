import React, { createContext } from 'react'

export const UserContext = createContext()

const AuthContext = ({children}) => {
    const [user, setUser] = React.useState({username: '', otp: '1234'})
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default AuthContext