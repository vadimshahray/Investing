import React from 'react'
import { ScreenContent } from '@components'
import { TrackedRatesList } from './TrackedRatesList'
import { RatesTrackerSwitch } from './RatesTrackerSwitch'
import { useRatesTrackerHeaderRight, useScreenTitle } from '@hooks'

export const RatesTrackerScreen = () => {
  useScreenTitle('Investing')
  useRatesTrackerHeaderRight()

  return (
    <ScreenContent noScroll noPadding>
      <TrackedRatesList />

      <RatesTrackerSwitch />
    </ScreenContent>
  )
}
