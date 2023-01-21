import { configureStore } from '@reduxjs/toolkit'
import { ratesTrackerSlice } from './slices/ratesTracker.slice'

export const store = configureStore({
  reducer: {
    ratesTracker: ratesTrackerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
  },
})
