import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  loggedInUserId: number | null
  accessToken: string | null
  loggedIn: (userId: number, token: string) => void
  loggedOut: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      loggedInUserId: null,
      accessToken: null,
      loggedIn: (userId, token) =>
        set({ loggedInUserId: userId, accessToken: token }),
      loggedOut: () => {
        set({ loggedInUserId: null, accessToken: null })
        localStorage.removeItem('auth-storage')
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
)
