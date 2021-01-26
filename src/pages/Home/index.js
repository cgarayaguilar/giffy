import React, { Fragment } from 'react'
import useGifs from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'
import TrendingSearches from '../../components/TrendingSearches'
import SearchBar from 'components/SearchBar'

export default function Home() {
    const { loading, gifs } = useGifs()

    return (
        <Fragment>
            <SearchBar />
            <h2>Ultima busqueda</h2>
            <ListOfGifs gifs={gifs} />

            <TrendingSearches />
        </Fragment>
    )
}
