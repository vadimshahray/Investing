import React from 'react'
import { useDispatch } from '@hooks'
import { DefaultTheme } from '@styles'
import { setIsTracking } from '@slices'
import { useSelector } from 'react-redux'
import { Button } from 'react-native-paper'
import { selectRatesTrackerIsTracking } from '@selectors'

export const RatesTrackerSwitch = () => {
  const dispatch = useDispatch()

  const isTracking = useSelector(selectRatesTrackerIsTracking)

  const switchTracker = () => {
    dispatch(setIsTracking(!isTracking))
  }

  return (
    <Button
      mode='contained-tonal'
      onPress={switchTracker}
      textColor={isTracking ? DefaultTheme.colors.error : undefined}
      buttonColor={isTracking ? DefaultTheme.colors.errorContainer : undefined}
    >
      {isTracking ? 'Остановить' : 'Запустить'}
    </Button>
  )
}
