import React from 'react'
import './styles.css'
import { Link } from 'wouter'

const Gif = ({ title, id, url }) => {
  return (
    <Link to={`/gif/${id}`} className="Gif">
      <img src={url} alt="Elections" loading="lazy" />
      <h4>{title}</h4>
    </Link>
  )
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
