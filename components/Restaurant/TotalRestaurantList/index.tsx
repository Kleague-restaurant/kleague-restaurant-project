import ListPagination from '@/components/common/ListPagination'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import RestaurantCard from '@/components/common/RestaurantCard'
import { useRestaurantFilter } from '@/context/RestaurantFilterContext'
import useFilteredRestaurants from '@/hooks/useFilteredRestaurants'
import usePaginationData from '@/hooks/usePaginationData'
import { flexCol, mainTitle } from '@/styles/customStyle'
import { Restaurant } from '@/types/Restaurant'
import { cn } from '@/utils/cn'
import { useEffect, useState } from 'react'

type TotalRestaurantListProps = {
  restaurants: Omit<Restaurant, 'reviews'>[]
}

function TotalRestaurantList({
  restaurants,
}: TotalRestaurantListProps) {
  const { keyword, category, sortBy, viewMode } =
    useRestaurantFilter()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const filteredRestaurants = useFilteredRestaurants(
    restaurants,
    keyword,
    category,
    sortBy,
  )
  const { currentPageData: currentResaurant, totalPages } =
    usePaginationData(filteredRestaurants, currentPage)

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1)
  }, [totalPages])

  if (restaurants.length === 0) return <LoadingSpinner />
  return (
    <div className={flexCol('w-full')}>
      <div
        className={mainTitle()}
      >{`맛집 목록(${filteredRestaurants.length}곳)`}</div>
      <div
        className={cn('grid', 'gap-3', {
          'sm: grid-cols-1 md:grid-cols-3': viewMode === '카드형',
          'sm: grid-cols-1': viewMode === '리스트형',
        })}
      >
        {currentResaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            viewMode={viewMode}
          />
        ))}
      </div>
      <ListPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default TotalRestaurantList
