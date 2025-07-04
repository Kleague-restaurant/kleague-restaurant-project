import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Layout/Header'
import ConditionalFooter from '@/components/Layout/Footer/ConditionalFooter'
import Script from 'next/script'
import { cn } from '@/utils/cn'

export const metadata: Metadata = {
  title: 'K리그 맛집 지도',
  description: 'K리그 구장 근처 맛집을 소개합니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const ncpClientId = process.env.NEXT_PUBLIC_NCP_CLIENT_ID || ''

  return (
    <html lang="ko">
      <head>
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${ncpClientId}`}
        ></Script>
      </head>
      <body>
        <Header />
        <div className={cn('mt-[80px]', 'bg-[#f9fafb]')}>
          {children}
        </div>
        <ConditionalFooter />
      </body>
    </html>
  )
}
