import { render, waitFor, screen } from '../testUtils';
import Home from '../../pages/index';

it('should sort transactions based on transaction date in descending order', async () => {
  const transactions = [
    {
      id: 'a4c0caa9-4ca1-4206-9693-94c06cfae8fd',
      amount: 800,
      note: 'Rental',
      date: '2021-01-23',
      category: 'expense',
    },
    {
      id: 'f7bcead5-0d34-42d2-aeec-8d4e61787d50',
      amount: 2800,
      note: 'Salary',
      date: '2021-04-22',
      category: 'income',
    },
    {
      id: 'e9661059-5eb6-4cb7-89e7-92793a66ea4b',
      amount: 100,
      note: 'Coffe',
      date: '2020-10-01',
      category: 'expense',
    },
  ];

  const expectedOrder = [
    'f7bcead5-0d34-42d2-aeec-8d4e61787d50',
    'a4c0caa9-4ca1-4206-9693-94c06cfae8fd',
    'e9661059-5eb6-4cb7-89e7-92793a66ea4b',
  ];

  render(<Home />, { initialState: { transactions } });

  await waitFor(() => {
    const elements = screen.getAllByRole('listitem');
    expect(elements).toHaveLength(transactions.length);

    elements.forEach((element, index) => {
      const elementTestId = element.dataset.testid;
      expect(elementTestId).toBe(expectedOrder[index]);
    });
  });
});
