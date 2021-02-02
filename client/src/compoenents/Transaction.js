import { useExpenseTrackerContext } from '../context/ExpenseTrackerContext';
import { numberWithCommas } from '../utils/format';

const Transaction = ({ id, text, amount }) => {
  const { deleteTransaction } = useExpenseTrackerContext();
  const sign = amount > 0 ? '+' : '-';

  return (
    <li className={amount > 0 ? 'plus' : 'minus'}>
      {text}{' '}
      <span>
        {sign}${numberWithCommas(Math.abs(amount))}
      </span>
      <button className='delete-btn' onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
