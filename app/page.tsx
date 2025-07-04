'use client'
import AuthTitle from '@/components/Auth/AuthTitle'
import KeywordSearchbar from '@/components/common/KeywordSearchbar'
import MainStadiumMap from '@/components/Main/MainStadiumsMap'
import MainStadiumList from '@/components/Main/MainStadiumsList'
import MainRestaurantList from '@/components/Main/MainRestaurantsList'
import { Pages } from '@/styles/customStyle'
import { useState } from 'react'

export default function Home() {
  const [searchKey, setSearchKey] = useState<string>('')

  return (
    <div className={Pages()}>
      <AuthTitle subT="경기장 주변 맛집을 찾아보세요" />
      <KeywordSearchbar
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <MainRestaurantList />
      <MainStadiumMap keyword={searchKey} />
      <MainStadiumList keyword={searchKey} />
    </div>
  )
}
