import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestInsurance, requestOneInsurance } from '../http/insuranceApi'

export const fetchInsurance = createAsyncThunk('news/fetchInsurance', async ({page = 1}, {getState}) => {
  const { limit } = getState().news
  const data = await requestInsurance(page, limit)

  return data
})

export const fetchOneInsurance = createAsyncThunk('news/fetchOneInsurance', async (id) => {
  const data = await requestOneInsurance(id)
  return data
})

const initialState = {
  insurance: [],
  oneInsurance: {},
  page: 1,
  totalCount: 0,
  limit: 3,
  loading: false,
  error: null,
}

export const insuranceSlice = createSlice({
  name: 'insurance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInsurance.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchInsurance.fulfilled, (state, action) => {
        state.loading = false
        state.insurance = action.payload.rows
        state.totalCount = action.payload.count
      })
      .addCase(fetchInsurance.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(fetchOneInsurance.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchOneInsurance.fulfilled, (state, action) => {
        state.loading = false
        state.oneInsurance = action.payload
      })
      .addCase(fetchOneInsurance.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default insuranceSlice.reducer
