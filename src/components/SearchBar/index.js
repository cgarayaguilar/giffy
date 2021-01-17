import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('')

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    //We are going to go another path
    onSubmit({ keyword })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Search your gifs here"
      />
      <input type="submit" value="Search" />
    </form>
  )
}

export default React.memo(SearchBar)
