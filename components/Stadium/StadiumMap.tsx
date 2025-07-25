'use client'

import { Stadium } from '@/types/Stadium'
import { useEffect, useRef } from 'react'

const MARKER_ICON = '/restaurantMarker.png'

export default function StadiumMap({
  latitude,
  longitude,
  name,
  logo,
  restaurants,
}: Partial<Stadium>) {
  const mapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!window.naver || !mapRef.current) return

    const map = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(latitude ?? 0, longitude ?? 0),
      zoom: 16,
      minZoom: 10,
    })

    restaurants?.forEach((restaurant) => {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(
          restaurant.latitude ?? 0,
          restaurant.longitude ?? 0,
        ),
        map,
        title: restaurant.name,
        icon: {
          url: MARKER_ICON,
          size: new naver.maps.Size(45, 45),
          scaledSize: new naver.maps.Size(45, 45),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(12, 12),
        },
      })
    })

    new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude ?? 0, longitude ?? 0),
      title: name,
      map,
      icon: {
        url: logo ?? MARKER_ICON,
        size: new naver.maps.Size(70, 70),
        scaledSize: new naver.maps.Size(70, 70),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(12, 12),
      },
    })
  }, [])

  return (
    <div
      ref={mapRef}
      className="mt-4 mb-4 w-full h-[300px] rounded-xl"
    />
  )
}
