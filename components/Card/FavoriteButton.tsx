'use client'

import {
  addFavorite,
  deleteFavorite,
  fetchFavorites,
} from '@/services/favorites'
import { useAuthStore } from '@/store/useAuthStore'
import useModal from '@/hooks/useModal'
import axiosInstance from '@/utils/axiosInstance'
import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'
import Modal from '../common/Modal'


interface FavoriteButtonProps {
  restaurantId: number
}

export default function FavoriteButton({
  restaurantId,
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const accessToken = useAuthStore((state) => state.accessToken)
  const { modalOpen, setModalOpen, modalContent, openModal } =
    useModal()


  useEffect(() => {
    const checkFavorite = async () => {
      if (!accessToken) {
        setIsFavorite(false)
        return
      }
      try {
        const favorites = await fetchFavorites()
        const exists = favorites.some(
          (fav) => fav.restaurantId === restaurantId,
        )
        setIsFavorite(exists)
      } catch (err) {
        console.error('즐겨찾기 불러오기 실패', err)
      }
    }
    checkFavorite()
  }, [restaurantId, accessToken])

  const toggleFavorite = async () => {
    if (!accessToken) {
      openModal({
        isError: false,
        title: '로그인이 필요합니다',
        description: '즐겨찾기 기능을 사용하려면 로그인 해주세요.',
        onBtnClick: () => {
          window.location.href = '/login'
        },
      })
      return
    }
    if (isLoading) return
    setIsLoading(true)

    try {
      if (isFavorite) {
        await deleteFavorite(restaurantId)
        setIsFavorite(false)
      } else {
        await addFavorite(restaurantId)
        setIsFavorite(true)
      }
    } catch (error) {
      console.error('즐겨찾기 토글 실패', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      className={`p-1 rounded-full`}
      onClick={toggleFavorite}
      disabled={isLoading}
    >
      <Heart
        fill={isFavorite ? 'red' : 'none'}
        color={isFavorite ? 'red' : 'black'}
      />
      <Modal
        isOpen={modalOpen}
        onOpenChange={setModalOpen}
        contents={modalContent}
      />
    </button>
  )
}
