import { cn } from '@/utils/cn'
import { ClassValue } from 'clsx'

// Flex
export const flexRow = (...args: ClassValue[]) =>
  cn('flex', 'flex-row', 'gap-2', ...args)

export const flexCol = (...args: ClassValue[]) =>
  cn('flex', 'flex-col', 'gap-2', ...args)

export const flexRowICenter = (...args: ClassValue[]) =>
  cn('flex', 'flex-row', 'items-center', 'gap-2', ...args)

export const flexColICenter = (...args: ClassValue[]) =>
  cn('flex', 'flex-col', 'items-center', 'gap-2', ...args)

export const flexRowJCenter = (...args: ClassValue[]) =>
  cn('flex', 'flex-row', 'justify-center', 'gap-2', ...args)

export const flexColJCenter = (...args: ClassValue[]) =>
  cn('flex', 'flex-col', 'justify-center', 'gap-2', ...args)

export const flexRowIJCenter = (...args: ClassValue[]) =>
  cn(
    'flex',
    'flex-row',
    'items-center',
    'justify-center',
    'gap-2',
    ...args,
  )

export const flexColIJCenter = (...args: ClassValue[]) =>
  cn(
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'gap-2',
    ...args,
  )

// Span
export const span = (...args: ClassValue[]) =>
  cn('text-sm', 'text-[#374151]', ...args)

// Button
export const button = (...args: ClassValue[]) =>
  cn(
    'p-2',
    'rounded-md',
    'text-white',
    'font-semibold',
    'bg-blue-500',
    'hover:bg-blue-400',
    'cursor-pointer',
    'disabled:bg-blue-100',
    'disabled:cursor-not-allowed',
    ...args,
  )

// Link
export const link = (...args: ClassValue[]) =>
  cn(
    'text-md',
    'text-[#374151]',
    'hover:text-blue-500',
    'active:text-blue-500',
    'cursor-pointer',
    ...args,
  )

// Title
export const mainTitle = (...args: ClassValue[]) =>
  cn('text-xl', 'text-black', 'font-bold', ...args)

export const subTitle = (...args: ClassValue[]) =>
  cn('text-sm', 'text-[#374151]', ...args)

export const cardTitle = (...args: ClassValue[]) =>
  cn('text-2xl', 'font-extrabold', ...args)

// 로그인 회원가입 Input
export const authInput = (...args: ClassValue[]) =>
  cn(
    'p-2',
    'h-[42px]',
    'rounded-md',
    'border',
    'border-[#ccc]',
    'focus:outline-none',
    'focus:ring-1',
    'focus:ring-blue-500',
    'placeholder:text-gray-500',
    'placeholder:text-sm',
    ...args,
  )

export const authButtonLink = (...args: ClassValue[]) =>
  cn('text-sm', 'font-semibold', 'text-blue-500', ...args)

// select 커스텀 li요소
export const customSelectOptions = (...args: ClassValue[]) =>
  cn('text-sm', 'p-2', ...args)

// Card
export const Card = (...args: ClassValue[]) =>
  cn('bg-white', 'p-5', 'rounded-md', 'shadow-lg', ...args)

export const Pages = (...args: ClassValue[]) =>
  cn(
    'flex',
    'flex-col',
    'items-center',
    'gap-6',
    'w-full',
    'min-w-[375px]',
    'lg:max-w-[1200px]',
    'mx-auto',
    'p-3',
    ...args,
  )
