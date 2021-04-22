import PropTypes from 'prop-types';
import Link from 'next/link';

const TransactionItem = ({ transaction }) => {
  return (
    <li className="border-b border-gray-300 p-6 mx-2">
      <Link href={`/${transaction.id}/edit`}>
        <a className="flex flex-col sm:flex-row sm:items-center w-full">
          <div className="text-3xl font-bold">{transaction.formattedDay}</div>
          <div className="w-full flex items-center mt-4 sm:mt-0 sm:ml-10">
            <div className="flex-auto">
              <div className="text-lg font-semibold capitalize">
                {transaction.category}
              </div>
              <div className="text-gray-400">{transaction.note}</div>
            </div>
            <div
              className={`text-lg font-bold ml-5 sm:ml-0 ${
                transaction.category === 'expense'
                  ? 'text-red-600'
                  : 'text-green-600'
              }`}
            >
              {transaction.formattedAmount}
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    formattedDay: PropTypes.string.isRequired,
    formattedAmount: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransactionItem;
