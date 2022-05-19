import { createContext, useSatate } from "react";


export const UserContext = createContext()


export const UserContextProvider = ({ children }) => {

  const name = 'carlos'

  return (
    <UserContext.Provider value={name}>
      {children}
    </UserContext.Provider>

  )

}