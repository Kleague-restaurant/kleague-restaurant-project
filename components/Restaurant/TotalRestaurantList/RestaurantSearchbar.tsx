import CustomSelectInput from '@/components/common/CustomSelectInput'
import MainSearchbar from '@/components/common/KeywordSearchbar'
import { useRestaurantFilter } from '@/context/RestaurantFilterContext'
import {
  Card,
  flexCol,
  flexRowICenter,
  flexRowIJCenter,
  subTitle,
} from '@/styles/customStyle'
import { RestaurantSortType } from '@/types/Restaurant'
import { cn } from '@/utils/cn'
import {
  ArrowDownWideNarrow,
  Funnel,
  Grid3x2Icon,
  List,
} from 'lucide-react'

function TotalRestaurantSearchbar() {
  const {
    keyword,
    setKeyword,
    category,
    setCategory,
    sortBy,
    setSortBy,
    setViewMode,
  } = useRestaurantFilter()

  return (
    <div className={Card('w-full', flexCol('gap-4'))}>
      <MainSearchbar
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        isMain={false}
      />
      <div
        className={cn(
          'grid',
          'sm:grid-cols-2',
          'md:grid-cols-3',
          'gap-4',
        )}
      >
        <div className={flexRowICenter()}>
          <Funnel
            size={20}
            color="#ccc"
          />
          <CustomSelectInput
            placeholder="카테고리 선택"
            name="category"
            value={category}
            onChange={setCategory}
            options={['전체', '한식', '중식', '일식', '양식', '분식']}
            isFiltering={true}
          />
        </div>
        <div className={flexRowICenter()}>
          <ArrowDownWideNarrow
            size={20}
            color="#ccc"
          />
          <CustomSelectInput
            placeholder="정렬 기준 선택"
            name="sortBy"
            value={sortBy}
            onChange={(val) => setSortBy(val as RestaurantSortType)}
            options={['이름순', '평점순', '리뷰순']}
            isFiltering={true}
          />
        </div>
        <div className={cn('grid', 'grid-cols-2', 'gap-4')}>
          <button
            className={flexRowIJCenter(
              'rounded-full',
              'p-2',
              'border',
              'border-[#ccc]',
            )}
            onClick={() => setViewMode('카드형')}
          >
            <Grid3x2Icon size={16} />
            <span className={subTitle()}>카드형</span>
          </button>
          <button
            className={flexRowIJCenter(
              'rounded-full',
              'p-2',
              'border',
              'border-[#ccc]',
            )}
            onClick={() => setViewMode('리스트형')}
          >
            <List size={16} />
            <span className={subTitle()}>리스트형</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TotalRestaurantSearchbar
