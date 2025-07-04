import { Card, flexCol } from '@/styles/customStyle'
import { Restaurant } from '@/types/Restaurant'
import { cn } from '@/utils/cn'
import RestaurantDetails from './RestaurantDetails'
import RestaurantMap from './RestaurantMap'
import RestaurantCategory from './RestaurantCategory'
import RestaurantTitle from './RestaurantTitle'
import RestaurantImage from './RestaurantImage'

type RestaurantInfoProps = {
  restaurant: Restaurant
}
function RestaurantInfo({ restaurant }: RestaurantInfoProps) {
  return (
    <div className={Card(flexCol('w-full', 'gap-3'))}>
      <RestaurantImage />
      <RestaurantTitle
        title={restaurant.name}
        restId={restaurant.id}
      />
      <RestaurantCategory
        category={restaurant.category}
        avgRating={restaurant.avgRating}
        reviewsLen={restaurant.reviews.length}
      />
      <div
        className={cn(
          'grid',
          'sm:grid-cols-1',
          'md:grid-cols-2',
          'gap-4',
        )}
      >
        <RestaurantDetails
          address={restaurant.address}
          phone={restaurant.phone}
          businessHours={restaurant.businessHours}
          remark={restaurant.remark}
        />
        <RestaurantMap
          name={restaurant.name}
          lat={restaurant.latitude}
          lng={restaurant.longitude}
        />
      </div>
    </div>
  )
}

export default RestaurantInfo
