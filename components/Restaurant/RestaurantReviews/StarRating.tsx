'use client'
import { flexRowICenter } from '@/styles/customStyle'
import { cn } from '@/utils/cn'
import { Star } from 'lucide-react'
import { useState } from 'react'

type StarRatingProps = {
  rating: number
  onChange: (rating: number) => void
}

function StarRating({ rating, onChange }: StarRatingProps) {
  const [hover, setHover] = useState<number | null>(null)
  return (
    <div className={flexRowICenter('gap-1')}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isFill = hover !== null ? star <= hover : star <= rating
        return (
          <Star
            key={star}
            fill={isFill ? '#FFD94D' : 'none'}
            stroke={isFill ? '#FFD94D' : '#ccc'}
            size={18}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onChange(star)}
            className={cn(
              'cursor-pointer',
              'transition-colors',
              'duration-300',
            )}
          />
        )
      })}
    </div>
  )
}

export default StarRating
