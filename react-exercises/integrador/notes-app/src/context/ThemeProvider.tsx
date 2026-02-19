import React, { useState } from 'react'
import { ThemeContext } from '.'
import { Theme } from '../types'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeValue, setThemeValue] = useState('light')

  const changeTheme = () =>
    themeValue === Theme.LIGHT ? setThemeValue(Theme.DARK) : setThemeValue(Theme.LIGHT)

  return <ThemeContext value={{ theme: themeValue, changeTheme }}>{children}</ThemeContext>
}

export default ThemeProvider
