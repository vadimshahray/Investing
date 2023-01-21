import { createSlice } from '@reduxjs/toolkit'
import { RatesSlice, RatesSliceState } from '@types'

export const ratesSlice = createSlice<RatesSliceState, RatesSlice>({
  name: 'rates',
  initialState: {
    rates: [],
  },
  reducers: {
    addRate: (state, { payload }) => {
      state.rates.push(payload)
    },

    updateRate: (state, { payload }) => {
      const i = state.rates.findIndex((r) => r.id === payload.id)
      state.rates.splice(i, 1, payload)
    },

    removeRate: (state, { payload }) => {
      const i = state.rates.findIndex((r) => r.id === payload.id)
      state.rates.splice(i, 1)
    },
  },
})

export const { addRate, updateRate, removeRate } = ratesSlice.actions
