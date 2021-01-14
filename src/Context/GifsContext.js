import React, { useState } from 'react'

export const Context = React.createContext({})

const GifsContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([])

  return (
    <Context.Provider value={{ gifs, setGifs }}>{children}</Context.Provider>
  )
}

export default GifsContextProvider
