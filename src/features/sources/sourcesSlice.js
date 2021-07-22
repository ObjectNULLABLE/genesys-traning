import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import sources from './sourcesData.json';

const addSourceDB = createAsyncThunk('sources/addSourceDB',
  async (sourceData) => {
    try {
      const response = await axios.post('http://localhost:4000/api/sources/:lang', sourceData, {
        headers: {
          'x-access-token': localStorage.getItem('accessToken'),
        },
      });
      console.log(response.data);
    } catch (e) {
      console.log(e.data.message);
    }
  });

const sourcesSlice = createSlice({
  name: 'sources',
  initialState: {
    data: sources,
  },
  reducers: {
    addSourceAction(state, action) {
      state.data = [...state.data, action.payload];
    },
    deleteSourceAction(state, action) {
      state.data = state.data.filter(
        (source) => source.name !== action.payload.name,
      );
    },
    updateSourceAction(state, action) {
      const index = state.data.findIndex(
        (source) => source.id === action.payload.Id,
      );
      state.data[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSourceDB.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(addSourceDB.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending'
          && state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.entities.push(action.payload);
          state.currentRequestId = undefined;
        }
      })
      .addCase(addSourceDB.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending'
          && state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export default sourcesSlice.reducer;
export const { addSourceAction, deleteSourceAction, updateSourceAction } = sourcesSlice.actions;
export { addSourceDB };
