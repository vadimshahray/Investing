import { SCREEN_PADDING_H } from '@components'
import React, { PropsWithChildren } from 'react'
import { Surface, TouchableRipple } from 'react-native-paper'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'

type Props = {
  style?: StyleProp<ViewStyle>
  onPress?: () => void
} & Required<PropsWithChildren>

export const ListItemWrapper = ({ style, onPress, children }: Props) => {
  return (
    <Surface style={[styles.surface, style]}>
      <TouchableRipple onPress={onPress}>{children}</TouchableRipple>
    </Surface>
  )
}

const styles = StyleSheet.create({
  surface: {
    padding: 12,

    marginVertical: 6,
    marginHorizontal: SCREEN_PADDING_H,

    borderRadius: 8,
  },
})
