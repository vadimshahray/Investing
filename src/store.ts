import { ratesTrackerSlice } from '@slices'
import { configureStore } from '@reduxjs/toolkit'

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
