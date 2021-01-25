import useGifs from 'hooks/useGifs'
import { useEffect, useState } from 'react'
import { getSingleGif } from 'services/getSingleGif'

export const useSingleGif = ({ id }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const { gifs } = useGifs()
    const gifFromCache = gifs.find(singleGif => singleGif.id === id)

    const [gif, setGif] = useState(gifFromCache)

    useEffect(() => {
        if (!gif) {
            //Llamar al servicio si no tenemos gif
            getSingleGif({ id })
                .then(gif => {
                    setGif(gif)
                    setIsLoading(false)
                })
                .catch(err => {
                    setIsLoading(false)

                    setIsError(true)
                })
        }
    }, [id, gif])

    return { gif, isLoading, isError }
}
