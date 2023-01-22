import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { makeThemeStyles } from '@styles'
import { SvgProps } from 'react-native-svg'

export type EmptyContentProps = {
  text: string
  Image: React.ComponentType<SvgProps>
  size?: number
}

export const EmptyContent = ({
  text,
  Image,
  size = 200,
}: EmptyContentProps) => {
  const styles = useStyles()

  return (
    <View style={styles.view}>
      <Image width={size} height={size} />

      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const useStyles = makeThemeStyles((theme) => ({
  view: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: theme.colors.secondary,
  },
}))
