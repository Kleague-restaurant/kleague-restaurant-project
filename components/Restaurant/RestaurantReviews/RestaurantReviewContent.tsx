import Modal from '@/components/common/Modal'
import { TEAM_LOGOS } from '@/constants'
import useForm from '@/hooks/useForm'
import useModal from '@/hooks/useModal'
import { useAuthStore } from '@/store/useAuthStore'
import { useReviewStore } from '@/store/useReviewStore'
import {
  button,
  flexCol,
  flexColIJCenter,
  flexRowICenter,
  subTitle,
} from '@/styles/customStyle'
import { Review, ReviewFormType } from '@/types/Review'
import { cn } from '@/utils/cn'
import { SquarePen, Star, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import StarRating from './StarRating'

type RestaurantReviewContentProps = {
  review: Review
}

function RestaurantReviewContent({
  review,
}: RestaurantReviewContentProps) {
  const { loggedInUserId } = useAuthStore()
  const { editReview, deleteReview } = useReviewStore()
  const { form, handleInput, setField } = useForm<ReviewFormType>({
    rating: review.rating.toString(),
    content: review.content,
  })
  const { modalOpen, setModalOpen, modalContent, openModal } =
    useModal()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const isMyReview = loggedInUserId === review.userId

  const handleEdit = () => {
    try {
      editReview(review.id, {
        rating: parseInt(form.rating),
        content: form.content,
      })
      setIsEditing(false)
      openModal({
        isError: true,
        title: '댓글 수정 성공',
        description: '댓글 수정에 성공했습니다.',
      })
    } catch (e) {
      console.error(e)
      openModal({
        isError: true,
        title: '댓글 수정 실패',
        description:
          e instanceof Error
            ? e.message
            : '알 수 없는 오류가 발생했습니다.',
      })
    }
  }

  const handleDelete = () => {
    try {
      deleteReview(review.id)
      openModal({
        isError: true,
        title: '댓글 삭제 성공',
        description: '댓글 삭제에 성공했습니다.',
      })
      setTimeout(() => {}, 1000)
    } catch (e) {
      console.error(e)
      openModal({
        isError: true,
        title: '댓글 삭제 실패',
        description:
          e instanceof Error
            ? e.message
            : '알 수 없는 오류가 발생했습니다.',
      })
    }
  }

  return (
    <div className={flexCol('p-3', 'border-b')}>
      <div className={flexRowICenter('justify-between')}>
        <div className={flexRowICenter()}>
          {review.user && review.user.favoriteTeam && (
            <Image
              src={TEAM_LOGOS[review.user.favoriteTeam]}
              alt="리뷰어 팀 로고"
              width={40}
              height={40}
            />
          )}
          <div className={flexCol('gap-1')}>
            <div className={flexRowICenter()}>
              <span className={cn('text-xs', 'font-semibold')}>
                {review.user?.nickname}
              </span>
              <span className={cn('text-xs', 'text-[#ccc]')}>
                {new Date(review.createdAt)
                  .toISOString()
                  .slice(0, 10)}
              </span>
            </div>
            <div className={flexRowICenter()}>
              <div className={flexRowICenter()}>
                {isEditing ? (
                  <StarRating
                    rating={parseInt(form.rating)}
                    onChange={(rating) =>
                      setField('rating', rating.toString())
                    }
                  />
                ) : (
                  <div className={flexRowICenter('gap-0.5')}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        fill={
                          i < parseInt(form.rating)
                            ? '#FFD94D'
                            : '#ccc'
                        }
                        strokeWidth={0}
                        size={18}
                      />
                    ))}
                    <span className={subTitle('font-semibold')}>
                      {form.rating}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {isMyReview && (
          <div className={flexRowICenter('gap-4')}>
            <SquarePen
              size={14}
              color="#ccc"
              onClick={() => setIsEditing(true)}
              className={cn('cursor-pointer')}
            />
            <Trash2
              size={14}
              color="red"
              onClick={() => handleDelete()}
              className={cn('cursor-pointer')}
            />
          </div>
        )}
      </div>
      <div>
        {isEditing ? (
          <div className={flexRowICenter('w-full')}>
            <textarea
              name="content"
              value={form.content}
              onChange={handleInput}
              className={cn(
                'bg-white',
                'rounded-xl',
                'w-full',
                'resize-none',
                'p-4',
                'border',
                'border-[#ccc]',
              )}
            />
            <div className={flexColIJCenter('w-[100px]')}>
              <button
                onClick={() => handleEdit()}
                className={button('w-full')}
              >
                수정
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className={button(
                  'w-full',
                  'bg-white',
                  'text-black',
                  'font-medium',
                  'border',
                  'border-[#ccc]',
                )}
              >
                취소
              </button>
            </div>
          </div>
        ) : (
          review.content
        )}
      </div>
      <Modal
        isOpen={modalOpen}
        onOpenChange={setModalOpen}
        contents={modalContent}
      />
    </div>
  )
}

export default RestaurantReviewContent
