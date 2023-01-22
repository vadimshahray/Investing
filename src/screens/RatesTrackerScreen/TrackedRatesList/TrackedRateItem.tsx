import React from 'react'
import { Text } from 'react-native-paper'
import { makeThemeStyles } from '@styles'
import { ListItemWrapper, ListItemWrapperProps } from '@components'

export const TRACKED_RATE_ITEM_H = 40

type Props = {
  rate: TrackedRate
} & Pick<ListItemWrapperProps, 'style' | 'onPress'>

export const TrackedRateItem = ({ rate, style, ...wrapperProps }: Props) => {
  const styles = useStyles()

  const rateStyle = rate.isTracking ? styles.trackedRate : styles.notTrackedRate

  return (
    <ListItemWrapper style={[rateStyle, style]} {...wrapperProps}>
      <Text>{rate.name}</Text>
    </ListItemWrapper>
  )
}

const useStyles = makeThemeStyles((theme) => ({
  trackedRate: {
    backgroundColor: '#e8def7',
  },

  notTrackedRate: {
    backgroundColor: theme.colors.background,
  },
}))
