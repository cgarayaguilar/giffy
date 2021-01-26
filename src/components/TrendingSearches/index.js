import React, { Suspense, useEffect } from 'react'
import { useNearScreen } from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(() => import('components/TrendingSearches'))

const LazyTrending = () => {
    const { isNearScreen, fromRef } = useNearScreen({ distance: '0px' })

    useEffect(() => {}, [isNearScreen])

    return (
        <div ref={fromRef}>
            <Suspense fallback={'Loading'}>
                {isNearScreen ? <TrendingSearches /> : null}
            </Suspense>
        </div>
    )
}

export default LazyTrending
