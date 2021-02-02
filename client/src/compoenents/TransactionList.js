import { useEffect } from 'react';
import { useExpenseTrackerContext } from '../context/ExpenseTrackerContext';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions, getTransactions } = useExpenseTrackerContext();

  useEffect(() => {
    getTransactions();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
