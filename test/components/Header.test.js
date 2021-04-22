import { render, waitFor, screen } from '../testUtils';
import Header from '../../components/Header';
import * as nextRouter from 'next/router';
import { computeTransactionBalance } from '../../utils/transactions';
import { formatUsdAmount } from '../../utils/format';

jest.spyOn(nextRouter, 'useRouter').mockImplementationOnce(() => {
  return { pathname: '/' };
});

it('should display the correct wallet balance', async () => {
  const initialBalance = 100;
  const transactions = [
    {
      id: 'a4c0caa9-4ca1-4206-9693-94c06cfae8fd',
      amount: 800,
      note: 'Rental',
      date: '2021-04-23',
      category: 'expense',
    },
    {
      id: 'f7bcead5-0d34-42d2-aeec-8d4e61787d50',
      amount: 2800,
      note: 'Salary',
      date: '2021-04-22',
      category: 'income',
    },
  ];

  const formattedWalletBalance = getFormattedWalletBalance(
    initialBalance,
    transactions
  );

  render(<Header />, {
    initialState: { wallet: { initialBalance }, transactions },
  });

  await waitFor(() =>
    expect(screen.getByTestId('wallet-balance')).toHaveTextContent(
      formattedWalletBalance
    )
  );
});

function getFormattedWalletBalance(initialBalance, transactions) {
  const transactionsBalance = computeTransactionBalance(transactions);
  const walletBalance = initialBalance + transactionsBalance;

  return formatUsdAmount(walletBalance);
}
