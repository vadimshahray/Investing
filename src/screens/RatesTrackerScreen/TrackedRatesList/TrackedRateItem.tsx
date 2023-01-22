import React from 'react'
import { Text } from 'react-native-paper'
import { ListItemWrapper, ListItemWrapperProps } from '@components'

export const TRACKED_RATE_ITEM_H = 40

type Props = {
  rateName: string
} & Omit<ListItemWrapperProps, 'children'>

export const TrackedRateItem = ({ rateName, ...props }: Props) => {
  return (
    <ListItemWrapper {...props}>
      <Text>{rateName}</Text>
    </ListItemWrapper>
  )
}
