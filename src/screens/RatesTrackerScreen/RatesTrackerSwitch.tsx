import React from 'react'
import { useDispatch } from '@hooks'
import { DefaultTheme } from '@styles'
import { setIsTracking } from '@slices'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { Button } from 'react-native-paper'
import { selectRatesTrackerIsTracking } from '@selectors'
import { SCREEN_PADDING_H, SCREEN_PADDING_V } from '@components'

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
      style={styles.button}
      textColor={isTracking ? DefaultTheme.colors.error : undefined}
      buttonColor={isTracking ? DefaultTheme.colors.errorContainer : undefined}
    >
      {isTracking ? 'Остановить' : 'Запустить'}
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    marginVertical: SCREEN_PADDING_V,
    marginHorizontal: SCREEN_PADDING_H,
  },
})
