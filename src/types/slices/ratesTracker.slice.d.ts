import { PayloadAction, SliceCaseReducer } from '@reduxjs/toolkit'

export type RatesTrackerSliceState = {
  isTracking: boolean

  trackedRates: TrackedRate[]
}

export interface RatesTrackerSlice
  extends SliceCaseReducer<RatesTrackerSliceState> {
  setIsTracking: (
    state: RatesTrackerSliceState,
    action: PayloadAction<boolean>,
  ) => void

  addTrackedRate: (
    state: RatesTrackerSliceState,
    action: PayloadAction<TrackedRate>,
  ) => void

  removeTrackedRate: (
    state: RatesTrackerSliceState,
    action: PayloadAction<number>,
  ) => void
}
