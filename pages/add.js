import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../store/app/transactionsSlice';
import TransactionForm from '../components/TransactionForm/TransactionForm';

export default function AddTransaction() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddTransaction = (values) => {
    dispatch(addTransaction(values));
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Expense Tracker - Add Transaction</title>
      </Head>

      <div className="mt-10">
        <TransactionForm
          initialValues={{
            amount: '',
            note: '',
            date: '',
            category: 'income',
          }}
          onSubmit={handleAddTransaction}
        />
      </div>
    </>
  );
}
