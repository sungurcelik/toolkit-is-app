import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    setJobs: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.jobs = action.payload;
    },
    deleteJob: (state, action) => {
      // silinecek elemanın sırasını bulma
      const i = state.jobs.findIndex((i) => i.id === action.payload);
      // elemanı diziden kaldırma
      state.jobs.splice(i, 1);
    },
  },
});

export const { setLoading, setError, setJobs, deleteJob } = jobSlice.actions;

export default jobSlice.reducer;
