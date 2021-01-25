import React, { useEffect, useRef, useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import { useNearScreen } from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'

export default function SearchResults({ params: { keyword } }) {
    const { loading, gifs, setPage, loadingNextPage } = useGifs({ keyword })
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
                    <h3 className="App-title">{decodeURI(keyword)}</h3>

                    <ListOfGifs gifs={gifs} />
                    <div ref={externalRef}></div>
                </div>
            )}
        </>
    )
}
