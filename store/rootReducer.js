import { combineReducers } from '@reduxjs/toolkit';
import walletReducer from './app/walletSlice';
import transactionsReducer from './app/transactionsSlice';

export default combineReducers({
  transactions: transactionsReducer,
  wallet: walletReducer,
});
