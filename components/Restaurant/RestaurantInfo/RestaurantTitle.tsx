import FavoriteButton from '@/components/Card/FavoriteButton'
import { flexRowICenter } from '@/styles/customStyle'

type RestaurantTitleProps = {
  title: string
  restId: number
}

function RestaurantTitle({ title, restId }: RestaurantTitleProps) {
  return (
    <div
      className={flexRowICenter(
        'text-2xl',
        'font-bold',
        'justify-between',
      )}
    >
      {title}
      <FavoriteButton restaurantId={restId} />
    </div>
  )
}

export default RestaurantTitle
