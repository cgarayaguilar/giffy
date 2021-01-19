import { API_KEY, API_BASE } from './settings'

export const getSingleGif = async ({ id }) => {
  const apiURL = `${API_BASE}/gifs/${id}?api_key=${API_KEY}`

  try {
    const response = await fetch(apiURL)
    const { data = [] } = await response.json()
    const { images, title, id } = data

    const { url } = images.downsized_medium

    return { title, id, url }
  } catch (err) {
    console.error(err.message)
  }
}
