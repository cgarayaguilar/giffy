import { useState, useEffect, useContext } from 'react'
import { getGifs } from '../services/getGifs'
import { Context } from '../Context/GifsContext'

const INITIAL_PAGE = 0

export default function useGifs({ keyword, rating } = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)

    const { gifs, setGifs } = useContext(Context)
    const [page, setPage] = useState(INITIAL_PAGE)

    const keywordToUse =
        keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword: keywordToUse, rating }).then(newGifs => {
            setGifs(newGifs)
            setLoading(false)

            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword])

    useEffect(() => {
        if (page === INITIAL_PAGE) return
        setLoadingNextPage(true)
        getGifs({ keyword: keywordToUse, page, rating }).then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)
        })
    }, [page])

    return { loading, gifs, setPage, loadingNextPage }
}
