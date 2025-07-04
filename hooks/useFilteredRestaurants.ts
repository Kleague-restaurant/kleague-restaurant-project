import { Restaurant } from '@/types/Restaurant'
import { useMemo } from 'react'

function useFilteredRestaurants(
  restaurant: Omit<Restaurant, 'reviews'>[],
  keyword: string,
  category: string,
  sortBy: string,
) {
  return useMemo(() => {
    let result = [...restaurant]

    if (keyword)
      result = result.filter((r) => r.name.includes(keyword))

    if (category !== '전체')
      result = result.filter((r) => r.category === category)

    switch (sortBy) {
      case '평점순':
        result.sort((a, b) => b.avgRating - a.avgRating)
        break
      case '리뷰순':
        result.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      case '이름순':
        result.sort((a, b) => a.name.localeCompare(b.name, 'ko'))
        break
    }

    return result
  }, [restaurant, keyword, category, sortBy])
}

export default useFilteredRestaurants
