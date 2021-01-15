import React from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'

export default function SearchResults({ params: { keyword } }) {
  const { loading, gifs, setPage, loadingNextPage } = useGifs({ keyword })

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <>
      {loading ? (
        'Loading..'
      ) : (
        <div>
          <h3 className="App-title">{decodeURI(keyword)}</h3>

          <ListOfGifs gifs={gifs} />
          <br />
          <button onClick={handleNextPage}>Next page</button>
        </div>
      )}
    </>
  )
}
