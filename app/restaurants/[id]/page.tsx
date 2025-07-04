import RestaurantInfo from '@/components/Restaurant/RestaurantInfo'
import RestauranttReviews from '@/components/Restaurant/RestaurantReviews'
import { getRestaurantsDetail } from '@/services/restaurants'
import { Pages } from '@/styles/customStyle'

async function RestaurantsDetailPage({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params
  const restaurant = await getRestaurantsDetail(id)

  return (
    <div className={Pages()}>
      <RestaurantInfo restaurant={restaurant} />
      <RestauranttReviews restaurant={restaurant} />
    </div>
  )
}

export default RestaurantsDetailPage
