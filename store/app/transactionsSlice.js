import { createSelector, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  groupTransactionsByDate,
  computeTransactionBalance,
} from '../../utils/transactions';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: [],
  reducers: {
    addTransaction: (state, action) => {
      const transaction = { ...action.payload, id: uuidv4() };
      state.push(transaction);
    },
    editTransaction: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteTransaction: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const selectGroupedTransactions = createSelector(
  (state, type) => {
    const transactions = state.transactions;

    if (type) {
      return transactions.filter((transaction) =>
        transaction.note.toLowerCase().includes(type.toLowerCase())
      );
    }

    return transactions;
  },
  (transactions) => groupTransactionsByDate(transactions)
);

export const selectTransactionsBalance = ({ transactions }) => {
  return computeTransactionBalance(transactions);
};

const { actions, reducer } = transactionsSlice;

export const { addTransaction, editTransaction, deleteTransaction } = actions;

export default reducer;
