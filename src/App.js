import './App.css';
import Header from './compoenents/Header';
import Balance from './compoenents/Balance';
import IncomeExpenses from './compoenents/IncomeExpenses';
import TransactionList from './compoenents/TransactionList';
import AddTransaction from './compoenents/AddTransaction';
import { ExpenseTrackerProvider } from './context/ExpenseTrackerContext';

const App = () => {
  return (
    <ExpenseTrackerProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </ExpenseTrackerProvider>
  );
};

export default App;
