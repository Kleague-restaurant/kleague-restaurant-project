import { TabsContent } from '@/components/ui/tabs'
import { RESTAURANT_CATEGORIES } from '@/constants'
import { Restaurant } from '@/types/Restaurant'
import { Swiper, SwiperSlide } from 'swiper/react'
import MainRestaurantCard from './RestaurantCard'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import LoadingSpinner from '@/components/common/LoadingSpinner'

type RestaurantTabsContentProps = {
  restaurants: Restaurant[]
  isLoading: boolean
}

function RestaurantTabsContent({
  restaurants,
  isLoading,
}: RestaurantTabsContentProps) {
  return (
    <>
      {RESTAURANT_CATEGORIES.map(({ value }) => (
        <TabsContent
          key={value}
          value={value}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={24}
              grabCursor={true}
              loop={restaurants.length > 4}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {restaurants.slice(0, 10).map((rest) => (
                <SwiperSlide key={rest.id}>
                  <MainRestaurantCard restaurant={rest} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </TabsContent>
      ))}
    </>
  )
}

export default RestaurantTabsContent
