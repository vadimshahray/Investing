import React from 'react'
import { useScreenTitle } from '@hooks'
import { ScreenContent } from '@components'
import { CurrencyServiceSwitch } from './CurrencyServiceSwitch'

export const CurrencyTogglerScreen = () => {
  useScreenTitle('Главная')

  return (
    <ScreenContent>
      <CurrencyServiceSwitch />
    </ScreenContent>
  )
}
