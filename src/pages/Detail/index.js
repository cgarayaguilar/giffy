import React, { useContext } from 'react'
import Gif from '../../components/Gif'
import { Context } from '../../Context/GifsContext'

export default function Detail({ params }) {
  const { gifs } = useContext(Context)

  const gif = gifs.find(singleGif => singleGif.id === params.id)

  if (gif) return <Gif id={gif.id} title={gif.title} url={gif.url} />
  return 'No se encontro el gif'
}
