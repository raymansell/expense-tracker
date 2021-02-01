import './App.css';
import Header from './compoenents/Header';
import Balance from './compoenents/Balance';
import IncomeExpenses from './compoenents/IncomeExpenses';
import TransactionList from './compoenents/TransactionList';
import AddTransaction from './compoenents/AddTransaction';

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
};

export default App;
