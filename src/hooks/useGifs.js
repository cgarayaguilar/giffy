import { useState, useEffect, useContext } from 'react'
import { getGifs } from '../services/getGifs'
import { Context } from '../Context/GifsContext'

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(Context)

  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword: keywordToUse }).then(newGifs => {
      setGifs(newGifs)
      setLoading(false)

      localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword])

  return { loading, gifs }
}
