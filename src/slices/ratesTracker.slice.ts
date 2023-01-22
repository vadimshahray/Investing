import { defaultTrackedRates } from '@utils'
import { createSlice } from '@reduxjs/toolkit'
import { RatesTrackerSlice, RatesTrackerSliceState } from '@types'

export const ratesTrackerSlice = createSlice<
  RatesTrackerSliceState,
  RatesTrackerSlice
>({
  name: 'ratesTracker',
  initialState: {
    isTracking: false,

    rates: defaultTrackedRates,
  },
  reducers: {
    setIsTracking: (state, { payload }) => {
      state.isTracking = payload
    },

    addRate: (state, { payload }) => {
      state.rates.push(payload)
    },

    updateRate: (state, { payload }) => {
      const i = state.rates.findIndex((r) => r.id === payload.id)

      if (i !== -1) {
        state.rates.splice(i, 1, payload)
      }
    },

    removeRate: (state, { payload }) => {
      const i = state.rates.findIndex((r) => r.id === payload)

      if (i !== -1) {
        state.rates.splice(i, 1)
      }
    },

    setRateIsTracking: (state, { payload }) => {
      const i = state.rates.findIndex((r) => r.id === payload.id)

      if (i !== -1) {
        state.rates[i].isTracking = payload.isTracking
      }
    },
  },
})

export const {
  addRate,
  updateRate,
  removeRate,
  setIsTracking,
  setRateIsTracking,
} = ratesTrackerSlice.actions
