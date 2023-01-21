import { persistStore, persistReducer } from 'redux-persist'
import { ratesTrackerSlice } from './slices/ratesTracker.slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  ratesTracker: ratesTrackerSlice.reducer,
})

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
  },
})

export const persistor = persistStore(store)
