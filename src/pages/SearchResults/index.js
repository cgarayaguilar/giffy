import React, { useEffect, useRef, useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import { useNearScreen } from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import SearchBar from 'components/SearchBar'

export default function SearchResults({ params: { keyword, rating } }) {
    const { loading, gifs, setPage, loadingNextPage } = useGifs({
        keyword,
        rating,
    })
    const externalRef = useRef()

    const title = gifs
        ? `${gifs.length} resultados de ${decodeURI(keyword)}`
        : ''

    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false,
    })

    const debounceHandleNextPage = useCallback(
        debounce(() => {
            setPage(prevPage => prevPage + 1)
        }, 200),
        [setPage]
    )

    useEffect(() => {
        isNearScreen && debounceHandleNextPage()
    }, [isNearScreen])

    return (
        <>
            {loading ? (
                'Loading..'
            ) : (
                <div>
                    <Helmet>
                        <title>{title}</title>{' '}
                    </Helmet>
                    <SearchBar
                        initialRating={rating}
                        initialKeyword={keyword}
                    />

                    <h3 className="App-title">{decodeURI(keyword)}</h3>

                    <ListOfGifs gifs={gifs} />
                    <div ref={externalRef}></div>
                </div>
            )}
        </>
    )
}
