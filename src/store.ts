import { ratesTrackerSlice } from '@slices'
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  ratesTracker: ratesTrackerSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
  },
})

export const persistor = persistStore(store)
