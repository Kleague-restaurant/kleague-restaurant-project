import { flexRowICenter } from '@/styles/customStyle'
import { cn } from '@/utils/cn'
import { Star } from 'lucide-react'

type RestaurantReviewStarProps = {
  avgRating: number
  reviewCount: number
}

function RestaurantReviewStar({
  avgRating,
  reviewCount,
}: RestaurantReviewStarProps) {
  return (
    <div
      className={flexRowICenter('font-semibold', 'text-sm', 'gap-1')}
    >
      <Star
        fill="#FFD94D"
        strokeWidth={0}
        size={16}
      />
      {avgRating}
      <span className={cn('text-xs', 'text-[#ccc]')}>
        ({reviewCount})
      </span>
    </div>
  )
}

export default RestaurantReviewStar
