import { useEffect, useRef } from 'react'

export const useSeo = ({ title, description }) => {
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(
        document.querySelector('meta[name="description"]')
    ).getAttribute('content')

    useEffect(() => {
        if (!title) return

        const previousTitle = prevTitle.current

        document.title = `${title} | Giffy`

        return () => (document.title = previousTitle)
    }, [title])

    useEffect(() => {
        if (!description) return

        const previousDescription = prevDescription.current

        const metaDescription = document.querySelector(
            'meta[name="description"]'
        )
        metaDescription.setAttribute('content', description)

        return () =>
            metaDescription.setAttribute('content', previousDescription)
    }, [description])
}
