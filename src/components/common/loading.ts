import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/store'

type LoadingProps = {
  isLoading: boolean
}

const initialState: LoadingProps = {
  isLoading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    loadingStart: (state) => {
      state.isLoading = true
    },
    loadingFinish: (state) => {
      state.isLoading = false
    },
  },
})

export const { loadingStart, loadingFinish } = loadingSlice.actions

export const isLoadingSelector = (state: RootState) =>
  state.loadingReducer.isLoading

export const loadingReducer = loadingSlice.reducer
