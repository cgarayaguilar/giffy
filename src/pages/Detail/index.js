import React from 'react'
import Gif from '../../components/Gif'
import { useSingleGif } from 'hooks/useSingleGif'
import { Helmet } from 'react-helmet'

import { Redirect } from 'wouter'

export default function Detail({ params }) {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id })

    const title = gif ? gif.title : ''

    if (isLoading)
        return (
            <Helmet>
                <title>Cargando</title>{' '}
            </Helmet>
        )
    if (gif)
        return (
            <>
                <Helmet>
                    <title>{title}</title>{' '}
                </Helmet>
                <Gif id={gif.id} title={gif.title} url={gif.url} />{' '}
            </>
        )
    return <Redirect to="/404" />
}
