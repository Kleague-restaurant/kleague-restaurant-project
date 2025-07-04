'use client'
import { useState } from 'react'

function useForm<T extends Record<string, string>>(initialState: T) {
  const [form, setForm] = useState<T>(initialState)

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const setField = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const isFormValid = Object.values(form).every(
    (v) => v.trim() !== '',
  )

  const resetForm = () => setForm(initialState)

  return {
    form,
    handleInput,
    isFormValid,
    setForm,
    setField,
    resetForm,
  }
}

export default useForm
