import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
  name: 'wallet',
  initialState: { initialBalance: 0 },
  reducers: {},
});

export default transactionsSlice.reducer;
