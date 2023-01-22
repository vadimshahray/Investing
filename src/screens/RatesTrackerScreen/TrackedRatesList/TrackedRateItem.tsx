import React from 'react'
import { Text } from 'react-native-paper'

export const TRACKED_RATE_ITEM_H = 40

type Props = {
  rateName: string
}

export const TrackedRateItem = ({ rateName }: Props) => {
  return <Text>{rateName}</Text>
}
