import React from 'react'
import Gif from '../../components/Gif'
import { useSingleGif } from 'hooks/useSingleGif'

export default function Detail({ params }) {
  const { gif } = useSingleGif({ id: params.id })

  if (gif) return <Gif id={gif.id} title={gif.title} url={gif.url} />

  return 'No se encontro el gif'
}
