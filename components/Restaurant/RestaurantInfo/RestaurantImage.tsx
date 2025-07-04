import { flexRowIJCenter } from '@/styles/customStyle'
import { cn } from '@/utils/cn'

function RestaurantImage() {
  return (
    <div
      className={cn(
        'w-full',
        'grid',
        'grid-cols-1',
        'md:grid-cols-2',
        'gap-2',
      )}
    >
      <div
        className={flexRowIJCenter(
          'h-64',
          'rounded-xl',
          'bg-gray-300',
          'text-gray-600',
        )}
      >
        이미지 준비중
      </div>
      <div
        className={cn(
          'grid',
          'grid-cols-2',
          'md:grid-cols-1',
          'gap-2',
        )}
      >
        <div
          className={flexRowIJCenter(
            'h-32',
            'rounded-xl',
            'bg-gray-300',
            'text-gray-600',
          )}
        >
          이미지 준비중
        </div>
        <div
          className={flexRowIJCenter(
            'h-30',
            'rounded-xl',
            'bg-gray-300',
            'text-gray-600',
          )}
        >
          이미지 준비중
        </div>
      </div>
    </div>
  )
}

export default RestaurantImage
