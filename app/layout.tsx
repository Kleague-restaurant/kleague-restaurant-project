import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Layout/Header'
import ConditionalFooter from '@/components/Layout/ConditionalFooter'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'K리그 맛집 지도',
  description: 'K리그 구장 근처 맛집을 소개합니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          type="text/javascript"
          strategy='beforeInteractive'
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        ></Script>
      </head>
      <body>
        <Header />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  )
}
