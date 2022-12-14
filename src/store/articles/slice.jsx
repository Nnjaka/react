import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../constants';

const initialState = {
    articles: [],
    loading: false,
    error: '',
}

const articlesSLice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = '';
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
    });
  }
});

export const fetchData = createAsyncThunk(
    'articles/fetchArticles',
    async () => {
        const response = await fetch(`${api}/v3/articles`);
        return response.json();
    }

);

export const { addArticles } = articlesSLice.actions;
export const articlesReducer = articlesSLice.reducer;