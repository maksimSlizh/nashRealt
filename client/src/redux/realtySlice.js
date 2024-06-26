import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestRealties, requestOneRealty} from '../http/realtyApi'

export const fetchRealties = createAsyncThunk('realty/fetchRealties', async ({page = 1}, { getState }) => {
  const { limit } = getState().realty
  const data = await requestRealties(page, limit)
  return data
})

export const fetchOneRealty = createAsyncThunk('realty/fetchOneRealty', async (id) => {
  const data = await requestOneRealty(id);
  return data
})

const initialState = {
  realties: [],
  oneRealty: [],
  totalCount: 0,
  limit: 4,
  loading: false,
  error: null,
};

export const realtySlice = createSlice({
  name: 'realty',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRealties.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRealties.fulfilled, (state, action) => {
        state.loading = false
        state.realties = action.payload.realties
        state.totalCount = action.payload.totalCount
      })
      .addCase(fetchRealties.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(fetchOneRealty.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchOneRealty.fulfilled, (state, action) => {
        state.loading = false
        state.oneRealty = action.payload
      })
      .addCase(fetchOneRealty.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
});

export default realtySlice.reducer
