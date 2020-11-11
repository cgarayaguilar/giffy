import React, { useEffect, useState } from 'react'
import Gif from './Gif'
import { getGifs } from '../services/getGifs'

const DEFAULT_GIFTS = [
  'https://media.giphy.com/media/uRatoydECkMVlagvat/giphy.gif',
  'https://media.giphy.com/media/D38NMx9QtAW4iLeF08/giphy.gif',
]

export default function ListOfGifs({ params: { keyword } }) {
  const [gifs, setGifs] = useState(DEFAULT_GIFTS)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])
  if (loading) return 'Loading...'
  else
    return (
      <div>
        {gifs.map(({ title, id, url }) => (
          <Gif key={id} id={id} title={title} url={url} />
        ))}
      </div>
    )
}
