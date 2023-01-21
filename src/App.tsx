import React from 'react'
import { Appbar } from '@components'
import { DefaultTheme } from '@styles'
import { persistor, store } from './store'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { RatesTrackerScreen, SettingsScreen } from '@screens'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export default () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <PaperProvider theme={DefaultTheme}>
            <NavigationContainer theme={DefaultTheme}>
              <Navigator
                initialRouteName='RatesTrackerScreen'
                screenOptions={{
                  header: Appbar,
                  statusBarStyle: 'dark',
                  statusBarColor: DefaultTheme.colors.background,
                }}
              >
                <Screen
                  name='RatesTrackerScreen'
                  component={RatesTrackerScreen}
                />

                <Screen name='SettingsScreen' component={SettingsScreen} />
              </Navigator>
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </ReduxProvider>
  )
}
