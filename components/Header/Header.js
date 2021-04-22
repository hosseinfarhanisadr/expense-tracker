import { useState } from 'react';
import Link from 'next/link';
import { useIsHome } from '../../hooks/useIsHome';
import { formatToday, formatUsdAmount } from '../../utils/format';
import InitialBalanceModal from '../InitialBalanceModal';
import { useSelector } from 'react-redux';
import { selectWalletBalance } from '../../store/app/walletSlice';

const Header = () => {
  const [isInitialBalanceModalOpen, setIsInitialBalanceModalOpen] = useState(
    false
  );

  const isHome = useIsHome();

  const walletBalance = useSelector(selectWalletBalance);

  const handleOpenInitialBalanceModal = () => {
    setIsInitialBalanceModalOpen(true);
  };

  const handleCloseInitialBalanceModal = () => {
    setIsInitialBalanceModalOpen(false);
  };

  return (
    <header className="relative w-full shadow-lg p-8 rounded-lg bg-gray-900 mt-12 text-white">
      {!isHome && (
        <Link href="/">
          <a className="inline-flex items-center absolute top-full left-0 md:top-4 md:-left-24 text-md text-purple-900 hover:text-purple-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="mr-2"
              width="14"
              height="14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </a>
        </Link>
      )}

      <div className="flex flex-col-reverse xs:flex-row sm:items-center justify-between">
        <div className="text-gray-300 text-md font-semibold mt-6 xs:mt-0">
          Wallet Balance
        </div>
        {/* <div className="text-gray-300 text-md font-semibold">Apr 12, 2021</div> */}
        <div className="text-gray-300 text-md font-semibold">
          {formatToday()}
        </div>
      </div>

      <div className="flex justify-between items-end mt-6 xs:mt-12">
        <div className="flex items-end">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            {formatUsdAmount(walletBalance)}
          </h1>
          <button
            type="button"
            className="px-2 py-2 focus:outline-none text-yellow-300 hover:text-yellow-500"
            aria-label="Edit Initial Balance"
            onClick={handleOpenInitialBalanceModal}
          >
            <span className="sr-only">Edit Initial Balance</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>
        <div className="text-gray-300 text-md font-semibold ml-4 sm:ml-4 hidden xs:block">
          USD
        </div>
      </div>
      <InitialBalanceModal
        isOpen={isInitialBalanceModalOpen}
        onClose={handleCloseInitialBalanceModal}
      />
    </header>
  );
};

export default Header;
