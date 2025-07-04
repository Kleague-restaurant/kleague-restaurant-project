'use client'
import AuthButtons from '@/components/Auth/AuthButtons'
import AuthInput from '@/components/Auth/AuthInput'
import AuthTitle from '@/components/Auth/AuthTitle'
import Modal from '@/components/common/Modal'
import useAuthForm from '@/hooks/useForm'
import useModal from '@/hooks/useModal'
import { reset } from '@/services/auth'
import { Card } from '@/styles/customStyle'
import { SignupForm } from '@/types/Auth'
import { AxiosErrorRes } from '@/types/Axios'
import { cn } from '@/utils/cn'
import { useRouter } from 'next/navigation'

function ResetPwPage() {
  const router = useRouter()

  const { form, handleInput, isFormValid } = useAuthForm<
    Pick<SignupForm, 'email' | 'phoneNumber' | 'password'>
  >({
    email: '',
    phoneNumber: '',
    password: '',
  })

  const { modalOpen, setModalOpen, modalContent, openModal } =
    useModal()

  const handleSubmit = async () => {
    try {
      await reset(form)
      openModal({
        isError: false,
        title: '비밀번호 변경 성공',
        description: '로그인 페이지로 이동합니다.',
        onBtnClick: () => {
          setModalOpen(false)
          router.push('/login')
        },
      })
    } catch (e: unknown) {
      const err = e as AxiosErrorRes
      openModal({
        isError: true,
        title: '비밀번호 변경 실패',
        description:
          err?.response?.data?.message ||
          '비밀번호 변경 중 오류가 발생했습니다.',
      })
    }
  }

  return (
    <div className={cn('mt-9')}>
      <AuthTitle subT="비밀번호를 재설정합니다." />
      <div className={Card('w-[350px]', 'mx-auto', 'space-y-5')}>
        <AuthInput
          label="이메일"
          name="email"
          type="email"
          value={form.email}
          onChange={handleInput}
        />
        <AuthInput
          label="휴대폰번호"
          name="phoneNumber"
          type="text"
          value={form.phoneNumber}
          onChange={handleInput}
        />
        <AuthInput
          label="새 비밀번호"
          name="password"
          type="password"
          value={form.password}
          onChange={handleInput}
        />
        <AuthButtons
          mode="reset"
          isDisabled={!isFormValid}
          onButtonClick={handleSubmit}
        />
      </div>
      <Modal
        isOpen={modalOpen}
        onOpenChange={setModalOpen}
        contents={modalContent}
      />
    </div>
  )
}

export default ResetPwPage
