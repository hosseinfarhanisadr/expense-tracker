import groupBy from 'lodash.groupby';
import { formatTransactionAmount } from './format';
/**
 * Get formatted month and year from date object
 * @param {object} transaction transaction object which includes dateObject
 * @returns {string} formatted month and year
 */
function getMonthAndYearFromTransactionDate(transaction) {
  const monthAndYear = transaction.dateObject.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  return monthAndYear;
}
/**
 * Add dateObject, formattedDay and formattedAmount to transaction objects
 * @param {Object[]} [transactions=[]] array of transaction objects
 * @returns {Object[]} new array of transaction objects
 */
function transformTransactions(transactions = []) {
  return transactions.map((transaction) => {
    // Add T00:00 to fix timezone issues when converting date string to date object
    const dateObject = new Date(transaction.date + 'T00:00');

    // Add leading zero to day string
    const formattedDay = `${dateObject.getDate()}`.padStart(2, '0');

    const formattedAmount = formatTransactionAmount(
      transaction.amount,
      transaction.category
    );

    return {
      ...transaction,
      dateObject,
      formattedDay,
      formattedAmount,
    };
  });
}
/**
 * Sort transaction array based on transaction date in descending order
 * @param {object[]} [transactions=[]] array of transaction objects
 * @returns {object[]} sorted transactions array
 */
function sortTransactionsByDate(transactions = []) {
  return transactions.sort(
    (a, b) => b.dateObject.getTime() - a.dateObject.getTime()
  );
}
/**
 * Group transaction objects by month and year
 * @param {object[]} [transactions=[]] array of transaction objects
 * @returns {object} grouped transactions
 */
export function groupTransactionsByDate(transactions = []) {
  const transformedTransactions = transformTransactions(transactions);
  const sortedTransactions = sortTransactionsByDate(transformedTransactions);

  return groupBy(sortedTransactions, getMonthAndYearFromTransactionDate);
}
/**
 * Compute the overall transaction amounts
 * @param {object[]} [transactions=[]] array of transaction objects
 * @returns {number} overall transaction amounts
 */
export function computeTransactionBalance(transactions = []) {
  let transactionsBalance = 0;

  transactions.forEach((transaction) => {
    const amount =
      transaction.category === 'expense'
        ? -transaction.amount
        : +transaction.amount;

    transactionsBalance += amount;
  });

  return transactionsBalance;
}
