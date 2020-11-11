import React, { useState } from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'

function App() {
  const [keyword, setKeyword] = useState('panda')

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gifs de pandas </Link>
        <Link to="/gif/nicaragua">Gifs de Nicaragua </Link>
        <Link to="/gif/colombia">Gifs de Colombia </Link>
        <Link to="/gif/Mexico">Gifs de mexico </Link>

        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  )
}

export default App
