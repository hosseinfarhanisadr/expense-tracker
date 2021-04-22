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
