import { PayloadAction, SliceCaseReducer } from '@reduxjs/toolkit'

export type RatesTrackerSliceState = {
  isTracking: boolean

  rates: TrackedRate[]
}

export interface RatesTrackerSlice
  extends SliceCaseReducer<RatesTrackerSliceState> {
  setIsTracking: (
    state: RatesTrackerSliceState,
    action: PayloadAction<boolean>,
  ) => void

  addRate: (
    state: RatesTrackerSliceState,
    action: PayloadAction<TrackedRate>,
  ) => void

  updateRate: (
    state: RatesTrackerSliceState,
    action: PayloadAction<TrackedRate>,
  ) => void

  removeRate: (
    state: RatesTrackerSliceState,
    action: PayloadAction<number>,
  ) => void

  setRateIsTracking: (
    state: RatesTrackerSliceState,
    action: PayloadAction<{ id: number; isTracking: boolean }>,
  ) => void
}
