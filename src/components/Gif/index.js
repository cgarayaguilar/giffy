import React from 'react'
import './styles.css'

export default function Gif({ title, id, url }) {
  return (
    <a href={`#${id}`} className="Gif">
      <img src={url} alt="Elections" loading="lazy" />
      <h4>{title}</h4>
    </a>
  )
}
