import { ViewStyle } from 'react-native'
import { SCREEN_PADDING_H } from '@components'

export const twoParts: {
  left: ViewStyle
  right: ViewStyle
} = {
  left: {
    marginLeft: SCREEN_PADDING_H,
    marginRight: SCREEN_PADDING_H / 2,
  },
  right: {
    marginLeft: SCREEN_PADDING_H / 2,
    marginRight: SCREEN_PADDING_H,
  },
}
