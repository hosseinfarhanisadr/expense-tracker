import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  editTransaction,
  deleteTransaction,
} from '../../store/app/transactionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import TransactionForm from '../../components/TransactionForm';

export default function EditTransaction() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { id } = router.query;

  const transaction = useSelector(({ transactions }) => {
    if (!id) {
      return;
    }
    return transactions.find((item) => item.id === id);
  });

  const handleEditTransaction = (values) => {
    dispatch(editTransaction(values));
    router.push('/');
  };

  const handleDeleteTransaction = () => {
    if (transaction.id) {
      dispatch(deleteTransaction(transaction.id));
    }
    router.push('/');
  };

  if (!transaction) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Edit Transaction</title>
      </Head>

      <div className="mt-10">
        <TransactionForm
          edit
          initialValues={transaction}
          onSubmit={handleEditTransaction}
          onDelete={handleDeleteTransaction}
        />
      </div>
    </>
  );
}
