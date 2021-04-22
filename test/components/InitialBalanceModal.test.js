import { render, waitFor, screen } from '../testUtils';
import userEvent from '@testing-library/user-event';
import InitialBalanceModal from '../../components/InitialBalanceModal';

it('should display error message when initial wallet balance is less than zero', async () => {
  const handleClose = jest.fn();

  // It is better to use userEvent.type instead of redux initial state to set negative number in input but there is a bug which is reported as an issue
  // https://github.com/testing-library/user-event/issues/336
  // Example: userEvent.type(screen.getByLabelText('Initial Balance'), '-100');
  render(<InitialBalanceModal isOpen={true} onClose={handleClose} />, {
    initialState: { wallet: { initialBalance: -100 } },
  });

  userEvent.click(screen.getByRole('button', { name: /Save/i }));

  await waitFor(() =>
    expect(
      screen.getByText('Initial balance must be greater than or equal to 0')
    ).toBeInTheDocument()
  );
});
