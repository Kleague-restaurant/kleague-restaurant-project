import LoadingSpinner from '@/components/common/LoadingSpinner'
import { TabsContent } from '@/components/ui/tabs'
import { KLEAGUE_TYPE } from '@/constants'
import { cn } from '@/utils/cn'
import { Stadium } from '@/types/Stadium'
import MainStadiumCard from './StadiumCard'
import StadiumShowButtons from './StadiumShowButtons'

type StadiumTabsContentProps = {
  tab: string
  stadiums: Stadium[] | null
  isShowAll: boolean
  onToggle: () => void
}

function StadiumTabsContent({
  tab,
  stadiums,
  isShowAll,
  onToggle,
}: StadiumTabsContentProps) {
  if (!stadiums)
    return (
      <TabsContent value={tab}>
        <LoadingSpinner />
      </TabsContent>
    )

  const visibleStadiums = isShowAll ? stadiums : stadiums.slice(0, 9)

  return (
    <>
      {KLEAGUE_TYPE.map(({ value }) => (
        <TabsContent
          key={value}
          value={value}
          className={cn('space-y-4')}
        >
          {tab === value &&
            (!stadiums ? (
              <LoadingSpinner />
            ) : (
              <>
                <div
                  className={cn(
                    'grid',
                    'sm:grid-cols-1',
                    'md:grid-cols-3',
                    'gap-5',
                  )}
                >
                  {visibleStadiums.map((stadium) => (
                    <MainStadiumCard
                      key={stadium.id}
                      stadium={stadium}
                    />
                  ))}
                </div>
                {stadiums.length >= 9 && (
                  <StadiumShowButtons
                    isShowAll={isShowAll}
                    onChange={onToggle}
                  />
                )}
              </>
            ))}
        </TabsContent>
      ))}
    </>
  )
}
export default StadiumTabsContent
