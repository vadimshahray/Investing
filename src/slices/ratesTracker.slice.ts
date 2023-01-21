import { createSlice } from '@reduxjs/toolkit'
import { RatesTrackerSlice, RatesTrackerSliceState } from '@types'

export const ratesTrackerSlice = createSlice<
  RatesTrackerSliceState,
  RatesTrackerSlice
>({
  name: 'ratesTracker',
  initialState: {
    isTracking: false,
  },
  reducers: {
    setIsTracking: (state, { payload }) => {
      state.isTracking = payload
    },
  },
})

export const { setIsTracking } = ratesTrackerSlice.actions
