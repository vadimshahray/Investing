import React, { PropsWithChildren } from 'react'
import { TouchableRipple } from 'react-native-paper'

type Props = {
  onPress?: () => void
} & Required<PropsWithChildren>

export const ListItemWrapper = ({ onPress, children }: Props) => {
  return <TouchableRipple onPress={onPress}>{children}</TouchableRipple>
}
