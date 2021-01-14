import React, { useContext } from 'react'
import Context from '../../Context/StaticContext'

export default function Detail() {
  const ContextValue = useContext(Context)
  console.log(ContextValue)
  return 'Details...'
}
