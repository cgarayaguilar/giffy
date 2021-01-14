import React from 'react'
const value = {
  name: 'alex',
}
const Context = React.createContext({
  name: 'Cesar',
})

export const ContextProvider = ({ children }) => (
  <Context.Provider value={value}>{children}</Context.Provider>
)

export default Context
