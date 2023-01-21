import { PayloadAction, SliceCaseReducer } from '@reduxjs/toolkit'

export type RatesTrackerSliceState = {
  isTracking: boolean
}

export interface RatesTrackerSlice
  extends SliceCaseReducer<RatesTrackerSliceState> {
  setIsTracking: (
    state: RatesTrackerSliceState,
    action: PayloadAction<boolean>,
  ) => void
}
