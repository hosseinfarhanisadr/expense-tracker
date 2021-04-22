import { render, waitFor, screen } from '../testUtils';
import TransactionForm from '../../components/TransactionForm';
import userEvent from '@testing-library/user-event';

const handleSubmit = jest.fn();

describe('Field validations when saving transaction', () => {
  it('display error message when date input is empty', async () => {
    render(
      <TransactionForm
        initialValues={{
          amount: '100',
          note: 'salary',
          category: 'income',
          date: '',
        }}
        onSubmit={handleSubmit}
      />
    );

    userEvent.click(screen.getByRole('button', { name: /Save Transaction/i }));

    await waitFor(() =>
      expect(screen.getByText('date is a required field')).toBeInTheDocument()
    );
  });

  it('should display error message when amount input is empty', async () => {
    render(
      <TransactionForm
        initialValues={{
          amount: '',
          note: 'salary',
          category: 'income',
          date: '2021-04-22',
        }}
        onSubmit={handleSubmit}
      />
    );

    userEvent.click(screen.getByRole('button', { name: /Save Transaction/i }));

    await waitFor(() =>
      expect(screen.getByText('amount is a required field')).toBeInTheDocument()
    );
  });

  it('should display error message when note input is empty', async () => {
    render(
      <TransactionForm
        initialValues={{
          amount: '100',
          note: '',
          category: 'income',
          date: '2021-04-22',
        }}
        onSubmit={handleSubmit}
      />
    );

    userEvent.click(screen.getByRole('button', { name: /Save Transaction/i }));

    await waitFor(() =>
      expect(screen.getByText('note is a required field')).toBeInTheDocument()
    );
  });
});
