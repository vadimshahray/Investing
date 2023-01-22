import React, { PropsWithChildren } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export type ScreenContentProps = {
  noScroll?: boolean
  noPadding?: boolean
} & PropsWithChildren

export const SCREEN_PADDING_H = 16
export const SCREEN_PADDING_V = 13

export const ScreenContent = ({
  noScroll = false,
  noPadding = false,
  children,
}: ScreenContentProps) => {
  const insets = useSafeAreaInsets()

  const paddingH = noPadding ? 0 : SCREEN_PADDING_H
  const paddingV = noPadding ? 0 : SCREEN_PADDING_V

  const Container = noScroll ? View : ScrollView

  return (
    <Container
      style={[
        {
          paddingTop: insets.top + paddingV,
          paddingBottom: insets.bottom + paddingV,
          paddingLeft: insets.left + paddingH,
          paddingRight: insets.right + paddingH,
        },
        styles.view,
      ]}
    >
      {children}
    </Container>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
})
