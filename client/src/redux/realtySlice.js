import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createRealty, requestRealties, requestOneRealty, deleteRealty } from '../http/realtyApi';

export const fetchRealties = createAsyncThunk('realty/fetchRealties', async (_, { getState }) => {
  const { page, limit } = getState().realty;
  const data = await requestRealties(page, limit);
  return data;
});

export const fetchOneRealty = createAsyncThunk('realty/fetchOneRealty', async (id) => {
  const data = await requestOneRealty(id);
  return data;
});

export const deleteOneRealty = createAsyncThunk('realty/deleteOneRealty', async (id) => {
  const data = await deleteRealty(id);
  return data;
});

const initialState = {
  realties: [],
  oneRealty: {},
  page: 1,
  totalCount: 0,
  limit: 9,
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
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRealties.fulfilled, (state, action) => {
        state.loading = false;
        state.realties = action.payload.rows;
        state.totalCount = action.payload.count;
      })
      .addCase(fetchRealties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchOneRealty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOneRealty.fulfilled, (state, action) => {
        state.loading = false;
        state.oneRealty = action.payload;
      })
      .addCase(fetchOneRealty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteOneRealty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteOneRealty.fulfilled, (state, action) => {
        state.loading = false;
        // Можно обновить список недвижимости после удаления
      })
      .addCase(deleteOneRealty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default realtySlice.reducer;
