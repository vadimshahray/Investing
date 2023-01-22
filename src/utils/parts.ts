import { SCREEN_PADDING_H } from '@components'
import { Dimensions, ViewStyle } from 'react-native'

const windowWidth = Dimensions.get('window').width

export const twoParts: {
  left: ViewStyle
  right: ViewStyle
} = {
  left: {
    width: windowWidth / 2 - 1.5 * SCREEN_PADDING_H,
    marginLeft: SCREEN_PADDING_H,
    marginRight: SCREEN_PADDING_H / 2,
  },
  right: {
    width: windowWidth / 2 - 1.5 * SCREEN_PADDING_H,
    marginLeft: SCREEN_PADDING_H / 2,
    marginRight: SCREEN_PADDING_H,
  },
}
