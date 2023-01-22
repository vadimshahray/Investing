export const selectRatesTrackerIsTracking = (state: RootState) =>
  state.ratesTracker.isTracking

export const selectRates = (state: RootState) => state.ratesTracker.rates
