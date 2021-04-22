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
