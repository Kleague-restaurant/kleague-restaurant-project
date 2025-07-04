import {
  RestaurantSortType,
  RestaurantViewType,
} from '@/types/Restaurant'
import { createContext, useContext, useState } from 'react'

type RestaurantFilterContextProps = {
  keyword: string
  setKeyword: (keyword: string) => void
  category: string
  setCategory: (category: string) => void
  sortBy: RestaurantSortType
  setSortBy: (sort: RestaurantSortType) => void
  viewMode: RestaurantViewType
  setViewMode: (mode: RestaurantViewType) => void
}

const RestaurantFilterConext =
  createContext<RestaurantFilterContextProps | null>(null)

export const RestaurantFilterProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [keyword, setKeyword] = useState<string>('')
  const [category, setCategory] = useState<string>('전체')
  const [sortBy, setSortBy] = useState<RestaurantSortType>('이름순')
  const [viewMode, setViewMode] =
    useState<RestaurantViewType>('카드형')

  return (
    <RestaurantFilterConext.Provider
      value={{
        keyword,
        setKeyword,
        category,
        setCategory,
        sortBy,
        setSortBy,
        viewMode,
        setViewMode,
      }}
    >
      {children}
    </RestaurantFilterConext.Provider>
  )
}

export const useRestaurantFilter = () => {
  const context = useContext(RestaurantFilterConext)
  if (!context) throw new Error('Provider 안에서 써라')
  return context
}
