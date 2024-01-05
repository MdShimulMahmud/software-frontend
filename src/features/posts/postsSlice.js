import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  posts: [],
  error: "",
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (query) => {
    const posts = await getPosts(query);
    return posts;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    filters: (state, action) => {
      state.posts = state.posts.filter((post) => post.type === action.payload);
    },
    searched: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.location === action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.posts = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default postsSlice.reducer;

export const { filters, searched } = postsSlice.actions;
