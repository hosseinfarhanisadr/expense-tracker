import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: [],
  reducers: {
    addTransaction: (state, action) => {
      const transaction = { ...action.payload, id: uuidv4() };
      state.push(transaction);
    },
  },
});

export const selectTransactionsBalance = ({ transactions }) => {
  let transactionsBalance = 0;

  transactions.forEach((transaction) => {
    const amount =
      transaction.category === 'expense'
        ? -transaction.amount
        : +transaction.amount;

    transactionsBalance += amount;
  });

  return transactionsBalance;
};

const { actions, reducer } = transactionsSlice;

export const { addTransaction } = actions;

export default reducer;
