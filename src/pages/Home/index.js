import React, { Fragment, useCallback } from 'react'
import { Link, useLocation } from 'wouter'
import useGifs from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'
import TrendingSearches from '../../components/TrendingSearches'
import SearchBar from 'components/SearchBar'

const POPULAR_GIFS = ['Matrix', 'Colombia', 'Chile']

export default function Home() {
  const [path, setPath] = useLocation()

  const { loading, gifs } = useGifs()

  const handleSubmit = useCallback(
    ({ keyword }) => {
      //We are going to go another path
      setPath(`/search/${keyword}`)
    },
    [setPath]
  )

  return (
    <Fragment>
      <h3 className="App-title">Los gifs mas populares</h3>
      <SearchBar onSubmit={handleSubmit} />
      <h2>Ultima busqueda</h2>
      <ListOfGifs gifs={gifs} />

      <TrendingSearches />
    </Fragment>
  )
}
