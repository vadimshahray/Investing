import React from 'react'
import { useScreenTitle } from '@hooks'
import { ScreenContent } from '@components'

export const SettingsScreen = () => {
  useScreenTitle('Настройки приложения')

  return <ScreenContent />
}
