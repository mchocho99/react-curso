import { createContext, useContext } from 'react'

export const ThemeContext = createContext<{
  theme: string
  changeTheme: () => void
} | null>(null)

export const useTheme = () => {
  return useContext(ThemeContext)
}
