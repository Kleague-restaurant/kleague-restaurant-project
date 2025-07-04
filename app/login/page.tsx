'use client'
import AuthButtons from '@/components/Auth/AuthButtons'
import AuthInput from '@/components/Auth/AuthInput'
import AuthTitle from '@/components/Auth/AuthTitle'
import Modal from '@/components/common/Modal'
import useAuthForm from '@/hooks/useForm'
import useModal from '@/hooks/useModal'
import { login } from '@/services/auth'
import { useAuthStore } from '@/store/useAuthStore'
import {
  authButtonLink,
  Card,
  flexCol,
  flexColICenter,
  flexColIJCenter,
  mainTitle,
} from '@/styles/customStyle'
import { LoginForm } from '@/types/Auth'
import { AxiosErrorRes } from '@/types/Axios'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function LoginPage() {
  const router = useRouter()
  const { form, handleInput, isFormValid } = useAuthForm<LoginForm>({
    email: '',
    password: '',
  })
  const { modalOpen, setModalOpen, modalContent, openModal } =
    useModal()

  const { loggedIn } = useAuthStore()

  const handleLogin = async () => {
    try {
      const { user, accessToken } = await login(
        form.email,
        form.password,
      )
      loggedIn(user.id, accessToken)
      openModal({
        isError: false,
        title: '로그인 성공',
        description: '메인페이지로 이동합니다.',
        onBtnClick: () => {
          setModalOpen(false)
          router.push('/')
        },
      })
    } catch (e: unknown) {
      const err = e as AxiosErrorRes
      openModal({
        isError: true,
        title: '로그인 실패',
        description:
          err?.response?.data?.message ||
          '로그인 도중 오류가 발생했습니다.',
      })
    }
  }

  return (
    <div className={cn('mt-9')}>
      <AuthTitle subT="로그인하여 더 많은 기능을 이용하세요" />
      <div
        className={Card(
          'w-[350px]',
          'mx-auto',
          'space-y-4',
          flexColICenter(),
        )}
      >
        <span className={flexColIJCenter(mainTitle())}>로그인</span>
        <div className={flexCol('w-full', 'gap-3')}>
          <AuthInput
            label="이메일"
            name="email"
            type="email"
            value={form.email}
            onChange={handleInput}
          />
          <AuthInput
            label="비밀번호"
            name="password"
            type="password"
            value={form.password}
            onChange={handleInput}
          />
        </div>
        <Link
          href="/resetpw"
          className={authButtonLink()}
        >
          비밀번호를 잊으셨나요?
        </Link>
        <AuthButtons
          mode="login"
          isDisabled={!isFormValid}
          onButtonClick={handleLogin}
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


export default LoginPage
