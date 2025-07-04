import { flexCol } from '@/styles/customStyle'
import { Review } from '@/types/Review'
import RestaurantReviewContent from './RestaurantReviewContent'

type ReviewsListProps = {
  reviews: Review[]
}

function RestaurantReviewsList({ reviews }: ReviewsListProps) {
  return (
    <div className={flexCol()}>
      {reviews.map((rev) => (
        <RestaurantReviewContent
          key={rev.id}
          review={rev}
        />
      ))}
    </div>
  )
}

export default RestaurantReviewsList
