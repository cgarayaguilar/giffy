import { API_KEY, API_BASE } from './settings'

export const getGifs = async ({
    limit = 10,
    keyword = 'random',
    page,
    rating,
} = {}) => {
    const apiURL = `${API_BASE}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
        page * limit
    }&rating=${rating}&lang=en`
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
