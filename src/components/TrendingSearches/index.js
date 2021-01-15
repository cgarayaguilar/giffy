import React, { Suspense } from 'react'
import { useNearScreen } from 'hooks/useNearScreen'
//import { TrendingSearches } from 'components/TrendingSearches'

const TrendingSearches = React.lazy(() => import('components/TrendingSearches'))

const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '0px' })

  return (
    <div ref={fromRef}>
      <Suspense fallback={'Loading'}>
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  )
}

export default LazyTrending
