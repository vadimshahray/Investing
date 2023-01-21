import React from 'react'
import { Appbar, ScreenContent } from '@components'
import { CurrencyServiceSwitch } from './CurrencyServiceSwitch'

export const CurrencyTogglerScreen = () => {
  return (
    <>
      <Appbar title='Главная' />

      <ScreenContent>
        <CurrencyServiceSwitch />
      </ScreenContent>
    </>
  )
}
