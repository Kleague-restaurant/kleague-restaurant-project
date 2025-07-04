'use client'
import {
  customSelectOptions,
  flexRowICenter,
} from '@/styles/customStyle'
import { cn } from '@/utils/cn'
import { Check, ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

type CustomSelectInputProps = {
  placeholder: string
  name: string
  value: string
  onChange: (value: string) => void
  options: string[]
  isFiltering?: boolean
}

function CustomSelectInput({
  placeholder,
  value,
  onChange,
  options,
  isFiltering = false,
}: CustomSelectInputProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOptionClick = (opt: string) => {
    onChange(opt)
    setIsOpen(false)
  }

  return (
    <div className={cn('relative', 'w-full', 'bg-white')}>
      <button
        className={cn(
          'w-full',
          'h-[42px]',
          'p-2',
          'rounded-md',
          'border',
          'border-[#ccc]',
          'text-sm',
          isFiltering && 'rounded-full py-0 px-6 h-[32px]',
        )}
      >
        <div className={flexRowICenter('justify-between')}>
          <span
            className={cn({
              'text-black': value,
              'text-gray-500 text-sm': !value,
            })}
          >
            {value || placeholder}
          </span>
          <ChevronDown
            size={20}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </button>

      {isOpen && (
        <ul
          className={cn(
            'absolute',
            'z-10',
            'mt-1',
            'w-full',
            'border',
            'border-[#ccc]',
            'bg-white',
            'shadow-md',
            'max-h-60',
            'overflow-auto',
          )}
        >
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => handleOptionClick(opt)}
              className={flexRowICenter(
                customSelectOptions(),
                'hover:bg-gray-100',
                'cursor-pointer',
                opt === value && 'bg-gray-100',
              )}
            >
              {opt === value && (
                <Check
                  size={16}
                  color="#ccc"
                />
              )}
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomSelectInput
