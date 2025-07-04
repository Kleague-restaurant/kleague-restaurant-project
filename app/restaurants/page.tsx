'use client'
import Modal from '@/components/common/Modal'
import TotalRestaurantList from '@/components/Restaurant/TotalRestaurantList'
import TotalRestaurantSearchbar from '@/components/Restaurant/TotalRestaurantList/RestaurantSearchbar'
import { RestaurantFilterProvider } from '@/context/RestaurantFilterContext'
import useModal from '@/hooks/useModal'
import { getRestaurants } from '@/services/restaurants'
import { Pages } from '@/styles/customStyle'
import { AxiosErrorRes } from '@/types/Axios'
import { Restaurant } from '@/types/Restaurant'
import { useEffect, useState } from 'react'

function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<
    Omit<Restaurant, 'reviews'>[]
  >([])
  const { modalOpen, setModalOpen, modalContent, openModal } =
    useModal()

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants()
        setRestaurants(data)
      } catch (e: unknown) {
        const err = e as AxiosErrorRes
        openModal({
          isError: true,
          title: '전체 맛집 목록 로딩 실패',
          description:
            err?.response?.data?.message ||
            '맛집 목록을 로딩하는데 실패했습니다.',
        })
      }
    }

    fetchRestaurants()
  }, [])

  return (
    <RestaurantFilterProvider>
      <div className={Pages()}>
        <div>K리그 경기장 주변의 모든 맛집을 찾아보세요</div>
        <TotalRestaurantSearchbar />
        <TotalRestaurantList restaurants={restaurants} />
        <Modal
          isOpen={modalOpen}
          onOpenChange={setModalOpen}
          contents={modalContent}
        />
      </div>
    </RestaurantFilterProvider>
  )
}

export default RestaurantsPage
