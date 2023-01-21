import React from 'react'
import { ScreenContent } from '@components'
import { RatesTrackerSwitch } from './RatesTrackerSwitch'
import { useRatesTrackerHeaderRight, useScreenTitle } from '@hooks'

export const RatesTrackerScreen = () => {
  useScreenTitle('Investing')
  useRatesTrackerHeaderRight()

  return (
    <ScreenContent>
      <RatesTrackerSwitch />
    </ScreenContent>
  )
}
