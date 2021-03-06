import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Button from '../components/Button/Button';
import { selectGroupedTransactions } from '../store/app/transactionsSlice';
import TransactionItem from '../components/TransactionItem';
import { useState } from 'react';
import Input from '../components/Input';

export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const transactionGroups = useSelector((state) => {
    return selectGroupedTransactions(state, searchKeyword);
  });

  const handleChangeSearchKeyword = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Expense Tracker</title>
      </Head>
      <div className="flex flex-wrap flex-row sm:flex-row-reverse justify-between mt-12">
        <Link href="/add" passHref>
          <Button
            color="primary"
            variant="contained"
            className="w-full sm:w-auto mb-6 sm:mb-0"
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add Transaction
          </Button>
        </Link>

        <Input
          name="searchKeyword"
          value={searchKeyword}
          onChange={handleChangeSearchKeyword}
          placeholder="Search By Transaction Type"
          className="sm:w-1/2 py-2"
        />
      </div>

      <div>
        {!transactionGroups || Object.keys(transactionGroups).length === 0 ? (
          <h2 className="text-xl text-gray-400 leading-6 text-center p-4">
            No transactions.
          </h2>
        ) : null}

        {Object.keys(transactionGroups).map((groupTitle) => (
          <div key={groupTitle} className="my-12">
            <h2 className="text-gray-500 text-lg font-bold mb-2">
              {groupTitle}
            </h2>
            <ul>
              {transactionGroups[groupTitle]?.map((transaction) => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
