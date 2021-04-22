import { formatUsdAmount } from '../../utils/format';

describe('formatUsdAmount', () => {
  it('should display number currencies in a correct format', async () => {
    expect(formatUsdAmount(0)).toBe('$0.00');
    expect(formatUsdAmount(100)).toBe('$100.00');
    expect(formatUsdAmount(-256)).toBe('-$256.00');
    expect(formatUsdAmount(480.5)).toBe('$480.50');
  });
});
