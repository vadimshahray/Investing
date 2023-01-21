import { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'

export type RatesSliceState = {
  rates: TrackedRate[]
}

export interface RatesSlice extends SliceCaseReducers<RateSliceState> {
  addRate: (state: RatesSliceState, action: PayloadAction<TrackedRate>) => void

  updateRate: (
    state: RatesSliceState,
    action: PayloadAction<TrackedRate>,
  ) => void

  removeRate: (state: RatesSliceState, action: PayloadAction<number>) => void
}
