import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectTransactionsBalance } from './transactionsSlice';

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

export const selectWalletBalance = createSelector(
  [selectInitialBalance, selectTransactionsBalance],
  (initialBalance, transactionsBalance) => initialBalance + transactionsBalance
);

const { actions, reducer } = transactionsSlice;

export const { editInitialBalance } = actions;

export default reducer;
