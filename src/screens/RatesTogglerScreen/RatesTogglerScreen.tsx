import React from 'react'
import { ScreenContent } from '@components'
import { RatesServiceSwitch } from './RatesServiceSwitch'
import { useRatesTogglerHeaderRight, useScreenTitle } from '@hooks'

export const RatesTogglerScreen = () => {
  useScreenTitle('Investing')
  useRatesTogglerHeaderRight()

  return (
    <ScreenContent>
      <RatesServiceSwitch />
    </ScreenContent>
  )
}
