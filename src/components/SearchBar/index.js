import React from 'react'
import { useLocation } from 'wouter'
import { useForm } from './hook'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const SearchBar = (initialRating = 'g', initialKeyword = '') => {
    //const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
    const [_, setPath] = useLocation()
    const { keyword, rating, times, updateKeyword, updateRating } = useForm(
        initialKeyword,
        initialRating
    )

    const handleChange = e => {
        updateKeyword(e.target.value)
    }

    const handleChangeRating = e => {
        updateRating(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        //We are going to go another path
        setPath(`/search/${keyword}/${rating}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={keyword}
                onChange={handleChange}
                placeholder="Search your gifs here"
            />
            <select value={rating} onChange={handleChangeRating}>
                <option disabled>Rating type</option>
                {RATINGS.map(rating => (
                    <option key={rating} value={rating}>
                        {rating}
                    </option>
                ))}
            </select>
            <button type="submit">Search</button>
            <span>{times}</span>
        </form>
    )
}

export default React.memo(SearchBar)
