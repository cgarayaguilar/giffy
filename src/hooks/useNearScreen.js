import { useEffect, useState, useRef } from 'react'

export const useNearScreen = ({
  distance = '100px',
  externalRef,
  once = true,
} = {}) => {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current
    if (!element) return

    const onchange = (entries, observer) => {
      const el = entries[0]

      if (el.isIntersecting) {
        setIsNearScreen(true)
        //Desconectarse una vez que haya cargado el componente
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
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
      observer.observe(element)
    })

    return () => observer && observer.disconnect()
  }, [distance, externalRef, once])

  return { isNearScreen, fromRef }
}
