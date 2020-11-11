import { useState } from 'react'

const API_KEY = 'tnJ9vqP5pv4kBkNFwSCztHCOHY3rxejh'

export const getGifs = async ({ keyword = 'morty' } = {}) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  try {
    const response = await fetch(apiURL)
    const { data = [] } = await response.json()

    if (Array.isArray(data)) {
      return data.map(image => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { title, id, url }
      })
    }
  } catch (err) {
    console.error(err.message)
  }
}
