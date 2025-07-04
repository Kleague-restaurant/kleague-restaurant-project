import { cn } from '@/lib/utils'
import { useAuthStore } from '@/store/useAuthStore'
import { flexColIJCenter } from '@/styles/customStyle'
import { useRouter } from 'next/navigation'
type MobileSidebarProps = {
  open: boolean
  onClose: () => void
}

function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  const router = useRouter()
  const { accessToken, loggedOut } = useAuthStore()

  const actions = [
    { label: '구장 목록', href: '/stadiums' },
    { label: '맛집 목록', href: '/restaurants' },
    ...(!accessToken
      ? [
          { label: '로그인', href: '/login' },
          { label: '회원가입', href: '/signup' },
        ]
      : [
          {
            label: '마이페이지',
            href: 'user',
          },
          {
            label: '로그아웃',
            href: '/',
            onClick: () => loggedOut(),
          },
        ]),
  ]

  if (!open) return null

  return (
    <div
      className={cn('w-full', 'fixed', 'inset-0', 'z-50')}
      onClick={onClose}
    >
      <div
        className={cn('w-full', 'bg-white', 'absolute', 'top-[60px]')}
        onClick={(e) => e.stopPropagation()}
      >
        <ul>
          {actions.map((act, idx) => (
            <li
              key={idx}
              className={flexColIJCenter(
                'text-black',
                'w-full',
                'p-3',
                'active:bg-gray-100',
              )}
              onClick={() => {
                if (act.onClick) act.onClick()
                onClose()
                router.push(act.href)
              }}
            >
              {act.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileSidebar
