import { getLoggedInUser, getLoggedOutUser } from "./authAPI.js";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  error: "",
};

// async thunk
export const fetchLoggedInUser = createAsyncThunk(
  "auth/fetchLoggedInUser",
  async (data) => {
    const users = await getLoggedInUser(data);
    return users;
  }
);
export const fetchLoggedOutUser = createAsyncThunk(
  "auth/fetchLoggedOutUser",
  async () => {
    const users = await getLoggedOutUser();
    return users;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleSavedStatus: (state, action) => {
      const { blogId } = action.payload;
      const blogToUpdate = state.blogs.find((blog) => blog.id === blogId);
      if (blogToUpdate) {
        blogToUpdate.isSaved = !blogToUpdate.isSaved;
      }
    },
    filters: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.isSaved === true);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchLoggedInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchLoggedInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = {};
        state.isError = true;
        state.error = action.error?.message;
      })

      .addCase(fetchLoggedOutUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchLoggedOutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = {};
        state.isLoggedIn = false;
      })
      .addCase(fetchLoggedOutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;
export const { toggleSavedStatus, filters } = authSlice.actions;
