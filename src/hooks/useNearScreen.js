import { useEffect, useState, useRef } from 'react'

export const useNearScreen = ({ distance = '100px' } = {}) => {
  const fromRef = useRef(null)
  const [isNearScreen, setIsNearScreen] = useState(false)

  useEffect(() => {
    let observer

    const onchange = (entries, observer) => {
      const el = entries[0]

      if (el.isIntersecting) {
        setIsNearScreen(true)
        //Desconectarse una vez que haya cargado el componente
        observer.disconnect()
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onchange, {
        rootMargin: distance,
      })

      //Le pasamos un nodo del DOM al observe
      observer.observe(fromRef.current)
    })

    return () => observer.disconnect()
  })

  return { isNearScreen, fromRef }
}
