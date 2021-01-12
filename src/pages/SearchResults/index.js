import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from '../../hooks/useGifs'

export default function SearchResults({ params: { keyword } }) {
  const { loading, gifs } = useGifs({ keyword })

  return <>{loading ? 'Loading..' : <ListOfGifs gifs={gifs} />}</>
}
