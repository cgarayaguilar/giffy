import React from 'react'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { Link, Route } from 'wouter'

function App() {
  return (
    <div className="app">
      <section className="app__content">
        <h1>App</h1>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  )
}

export default App
