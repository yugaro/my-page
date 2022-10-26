import { configureStore } from '@reduxjs/toolkit'

import { loadingReducer } from './components/common/loading'

export const store = configureStore({
  reducer: {
    loadingReducer: loadingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
