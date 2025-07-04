import { flexRowICenter } from '@/styles/customStyle'
import { cn } from '@/utils/cn'
import RestaurantReviewStar from '@/components/common/RestaurantReviewStar'

type RestaurantCategoryProps = {
  category: string
  avgRating: number
  reviewsLen: number
}

function RestaurantCategory({
  category,
  avgRating,
  reviewsLen,
}: RestaurantCategoryProps) {
  return (
    <div className={flexRowICenter()}>
      <div
        className={cn(
          'rounded-full',
          'border',
          'border-[#ccc]',
          'px-2',
        )}
      >
        {category}
      </div>
      <RestaurantReviewStar
        avgRating={avgRating}
        reviewCount={reviewsLen}
      />
    </div>
  )
}

export default RestaurantCategory
