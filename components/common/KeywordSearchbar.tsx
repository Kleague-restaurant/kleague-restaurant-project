'use client'
import { useStadiumFilter } from '@/context/StadiumFilterContext'
import { flexColIJCenter } from '@/styles/customStyle'
import { cn } from '@/utils/cn'
import { Search } from 'lucide-react'

type KeywordSearchbarProps = {
  isMain?: boolean
}

function KeywordSearchbar({ isMain = true }: KeywordSearchbarProps) {
  const { keyword, setKeyword } = useStadiumFilter()
  return (
    <div className={cn('relative', 'w-full', isMain && 'max-w-md')}>
      <div
        className={flexColIJCenter(
          'absolute',
          'inset-y-0',
          'left-0',
          'pl-3',
          'pointer-events-none',
        )}
      >
        <Search
          size={24}
          color={'#ccc'}
        />
      </div>
      <input
        type="text"
        placeholder={
          isMain
            ? '구장명 또는 팀명으로 검색'
            : '맛집 이름을 검색하세요'
        }
        className={cn(
          'block',
          'rounded-xl',
          'w-full',
          'p-3',
          'pl-11',
          'bg-white',
          'text-gray-900',
          'border-2',
          'border-gray-200',
          'outline-none',
          'focus:border-blue-400',
        )}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  )
}

export default KeywordSearchbar
