const API_KEY = 'tnJ9vqP5pv4kBkNFwSCztHCOHY3rxejh'

export default function getGifs({ keyword = 'morty' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response
      if (Array.isArray(data)) {
        const gifs = data.map(image => image.images.downsized_medium.url)
        return gifs
      }
    })
}
