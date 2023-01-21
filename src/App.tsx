import React from 'react'
import { Appbar } from '@components'
import { DefaultTheme } from '@styles'
import { ThemeProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { RatesTogglerScreen, SettingsScreen } from '@screens'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export default () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={DefaultTheme}>
        <NavigationContainer theme={DefaultTheme}>
          <Navigator
            initialRouteName='RatesTogglerScreen'
            screenOptions={{
              header: Appbar,
              statusBarStyle: 'dark',
              statusBarColor: DefaultTheme.colors.background,
            }}
          >
            <Screen
              name='CurrencyTogglerScreen'
              component={RatesTogglerScreen}
            />

            <Screen name='SettingsScreen' component={SettingsScreen} />
          </Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
