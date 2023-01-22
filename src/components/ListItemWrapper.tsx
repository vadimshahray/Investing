import { SCREEN_PADDING_H } from '@components'
import React, { PropsWithChildren } from 'react'
import { Surface, TouchableRipple } from 'react-native-paper'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'

export const LIST_ITEM_MARGIN_V = 6

export type ListItemWrapperProps = {
  style?: StyleProp<ViewStyle>
  onPress?: () => void
} & Required<PropsWithChildren>

export const ListItemWrapper = ({
  style,
  onPress,
  children,
}: ListItemWrapperProps) => {
  return (
    <Surface style={[styles.surface, style]}>
      <TouchableRipple onPress={onPress}>{children}</TouchableRipple>
    </Surface>
  )
}

const styles = StyleSheet.create({
  surface: {
    flex: 1,

    padding: 12,

    marginVertical: LIST_ITEM_MARGIN_V,
    marginHorizontal: SCREEN_PADDING_H,

    borderRadius: 8,
  },
})
