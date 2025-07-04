'use client'
import { cn } from '@/utils/cn'
import { useEffect, useRef } from 'react'

type RestaurantMapProps = {
  name: string
  lat: number
  lng: number
}

function RestaurantMap({ name, lat, lng }: RestaurantMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.naver || !window.naver.maps) return

    const position = new naver.maps.LatLng(lat, lng)
    const mapOptions = {
      center: position,
      zoom: 14,
    }

    const map = new window.naver.maps.Map(mapRef.current!, mapOptions)

    new window.naver.maps.Marker({
      position,
      map,
      title: name,
      icon: {
        url: '/restaurantMarker.png',
        size: new naver.maps.Size(50, 50),
        scaledSize: new naver.maps.Size(40, 40),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(20, 20),
      },
    })
  }, [name, lat, lng])

  return (
    <div
      ref={mapRef}
      className={cn('w-full', 'h-48', 'rounded-xl')}
    />
  )
}

export default RestaurantMap
