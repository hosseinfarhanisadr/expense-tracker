/**
 * Format today date object
 * @returns {string} today date string. Examole: "Apr 22, 2021"
 */
export function formatToday() {
  const today = new Date();

  return today.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
/**
 * Format USD value
 * @param {number} amount - usd amount
 * @returns {string} formatted usd amount. Example: $2,500.00
 */
export function formatUsdAmount(amount) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(amount);
}
/**
 * Format transaction amount based on transaction category
 * @param {number} amount - usd amount
 * @param {string} category - transaction category, either expense or income
 * @returns formatted usd amount. Example: -$2,500.00
 */
export function formatTransactionAmount(amount, category) {
  return `${category === 'expense' ? '-' : '+'}${formatUsdAmount(amount)}`;
}
