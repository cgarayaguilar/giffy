import React, { useState, useEffect } from 'react'
import './App.css'
import getGifs from './services/getGifs'

const DEFAULT_GIFTS = [
  'https://media.giphy.com/media/uRatoydECkMVlagvat/giphy.gif',
  'https://media.giphy.com/media/D38NMx9QtAW4iLeF08/giphy.gif',
]

const DIFFERENT_GIFS = [
  'https://media.giphy.com/media/huBkkFR80SqmQ/giphy.gif',
  'https://media.giphy.com/media/jxODdkVOIGFgc/giphy.gif',
]

function App() {
  const [gifs, setGifs] = useState(DEFAULT_GIFTS)

  useEffect(() => {
    getGifs({ keyword: 'rick' }).then(gifs => setGifs(gifs))
  }, [gifs])

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map(singleGift => (
          <img key={singleGift} src={singleGift} alt="Elections" />
        ))}
      </section>
      <button
        onClick={() => {
          setGifs(DIFFERENT_GIFS)
        }}
      >
        Change gifs
      </button>
    </div>
  )
}

export default App
