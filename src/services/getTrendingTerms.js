import { useState } from 'react'
import { API_KEY, API_BASE } from './settings'

export const getTrendingTerms = async () => {
  const apiURL = `${API_BASE}/trending/searches?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

  try {
    const response = await fetch(apiURL)
    const { data = [] } = await response.json()

    return data
  } catch (err) {
    console.error(err.message)
  }
}
