import React, { Fragment, useState } from 'react'
import { Link, useLocation } from 'wouter'
import useGifs from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'

const POPULAR_GIFS = ['Matrix', 'Colombia', 'Chile']

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, setPath] = useLocation()

  const { loading, gifs } = useGifs()

  const handleSubmit = e => {
    e.preventDefault()
    //We are going to go another path
    setPath(`/search/${keyword}`)
  }
  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Search your gifs here"
        />
        <input type="submit" value="Search" />
      </form>

      <h3 className="App-title">Los gifs mas populares</h3>
      <ul>
        {POPULAR_GIFS.map(popularGif => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>

      <h2>Ultima busqueda</h2>
      <ListOfGifs gifs={gifs} />
    </Fragment>
  )
}
