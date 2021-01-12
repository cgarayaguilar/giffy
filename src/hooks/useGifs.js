import { useState, useEffect } from 'react'
import { getGifs } from '../services/getGifs'

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

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
