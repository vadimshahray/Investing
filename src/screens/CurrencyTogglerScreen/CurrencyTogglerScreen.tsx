import React from 'react'
import { ScreenContent } from '@components'
import { CurrencyServiceSwitch } from './CurrencyServiceSwitch'
import { useCurrencyTogglerHeaderRight, useScreenTitle } from '@hooks'

export const CurrencyTogglerScreen = () => {
  useScreenTitle('Investing')
  useCurrencyTogglerHeaderRight()

  return (
    <ScreenContent>
      <CurrencyServiceSwitch />
    </ScreenContent>
  )
}
