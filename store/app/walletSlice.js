import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
  name: 'wallet',
  initialState: { initialBalance: 0 },
  reducers: {
    editInitialBalance: (state, action) => {
      const newInitialBalance = action.payload;
      if (newInitialBalance >= 0) {
        state.initialBalance = newInitialBalance;
      }
    },
  },
});

export const selectInitialBalance = (state) => {
  return state.wallet.initialBalance;
};

const { actions, reducer } = transactionsSlice;

export const { editInitialBalance } = actions;

export default reducer;
