import React from 'react'
import './Gif.css'

export default function Gif({ title, id, url }) {
  return (
    <a href={`#${id}`} className="Gif">
      <img src={url} alt="Elections" />
      <h4>{title}</h4>
    </a>
  )
}
