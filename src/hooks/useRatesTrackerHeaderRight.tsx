import { useNavigation } from '@hooks'
import React, { useEffect } from 'react'
import { Appbar } from 'react-native-paper'

export const useRatesTrackerHeaderRight = () => {
  const { navigate, setOptions } = useNavigation()

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <Appbar.Action
          icon='cog-outline'
          onPress={() => navigate('SettingsScreen')}
        />
      ),
    })
  }, [setOptions, navigate])
}
