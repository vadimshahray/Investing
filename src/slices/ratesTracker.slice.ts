import { createSlice } from '@reduxjs/toolkit'
import { RatesTrackerSlice, RatesTrackerSliceState } from '@types'

export const ratesTrackerSlice = createSlice<
  RatesTrackerSliceState,
  RatesTrackerSlice
>({
  name: 'ratesTracker',
  initialState: {
    isTracking: false,

    trackedRates: [],
  },
  reducers: {
    setIsTracking: (state, { payload }) => {
      state.isTracking = payload
    },

    addTrackedRate: (state, { payload }) => {
      state.trackedRates.push(payload)
    },

    removeTrackedRate: (state, { payload }) => {
      state.trackedRates.splice(payload, 1)
    },
  },
})

export const { setIsTracking, addTrackedRate, removeTrackedRate } =
  ratesTrackerSlice.actions
