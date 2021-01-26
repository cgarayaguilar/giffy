import React from 'react'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { Route } from 'wouter'
import GifsContextProvider from './Context/GifsContext'

function App() {
    return (
        <GifsContextProvider>
            <div className="app">
                <section className="app__content">
                    <h1>App</h1>
                    <Route path="/" component={Home} />
                    <Route
                        path="/search/:keyword/:rating?"
                        component={SearchResults}
                    />
                    <Route path="/gif/:id" component={Detail} />
                    <Route path="/404" component={() => <h1>404 ERROR</h1>} />
                </section>
            </div>
        </GifsContextProvider>
    )
}

export default App
