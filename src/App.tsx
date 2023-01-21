import React from 'react'
import { StatusBar } from 'react-native'
import { CurrencyTogglerScreen } from '@screens'
import { DefaultTheme, ThemeProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={DefaultTheme}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor={DefaultTheme.colors.background}
        />

        <CurrencyTogglerScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
