import { flexCol, flexRowICenter } from '@/styles/customStyle'
import {
  Clock4,
  LucideIcon,
  MapPin,
  Phone,
  StickyNote,
} from 'lucide-react'

type DetailsRowProps = {
  icon: LucideIcon
  title: string
  value: string
}

type RestaurantDetailsProps = {
  address: string
  phone: string
  businessHours: string
  remark: string | null
}

function DetailsRow({ icon: Icon, title, value }: DetailsRowProps) {
  return (
    <div className={flexRowICenter('gap-4')}>
      <Icon
        size={24}
        color="#ccc"
      />
      <div className={flexCol('gap-1')}>
        <div className={'font-semibold'}>{title}</div>
        <div>{value}</div>
      </div>
    </div>
  )
}

function RestaurantDetails({
  address,
  phone,
  businessHours,
  remark,
}: RestaurantDetailsProps) {
  return (
    <div className={flexCol('gap-4')}>
      <DetailsRow
        icon={MapPin}
        title="주소"
        value={address}
      />
      <DetailsRow
        icon={Phone}
        title="전화번호"
        value={phone}
      />
      <DetailsRow
        icon={Clock4}
        title="영업시간"
        value={businessHours}
      />
      {remark && (
        <DetailsRow
          icon={StickyNote}
          title="기타"
          value={remark}
        />
      )}
    </div>
  )
}

export default RestaurantDetails
