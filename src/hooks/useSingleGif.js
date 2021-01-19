import useGifs from 'hooks/useGifs'
import { useEffect, useState } from 'react'
import { getSingleGif } from 'services/getSingleGif'

export const useSingleGif = ({ id }) => {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)

  const [gif, setGif] = useState(gifFromCache)

  useEffect(() => {
    if (!gif) {
      //Llamar al servicio si no tenemos gif
      getSingleGif({ id }).then(gif => setGif(gif))
    }
  }, [id, gif])

  return { gif }
}
