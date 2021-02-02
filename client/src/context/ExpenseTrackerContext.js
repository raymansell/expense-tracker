import { createContext, useReducer, useContext } from 'react';
import ExpenseTrackerReducer, { ACTIONS } from './ExpenseTrackerReducer';
import axios from 'axios';

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

export const ExpenseTrackerContext = createContext(initialState);

export const ExpenseTrackerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseTrackerReducer, initialState);

  const getTransactions = async () => {
    try {
      const res = await axios.get('/api/v1/transactions');
      dispatch({
        type: ACTIONS.GET_TRANSACTIONS,
        payload: { transactions: res.data.data },
      });
    } catch (error) {
      dispatch({
        type: ACTIONS.GET_TRANSACTIONS,
        payload: { error: error.response.data.error },
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({ type: ACTIONS.DELETE_TRANSACTION, payload: { id } });
    } catch (error) {
      dispatch({
        type: ACTIONS.GET_TRANSACTIONS,
        payload: { error: error.response.data.error },
      });
    }
  };

  const addTransaction = async (transaction) => {
    try {
      const res = await axios.post('/api/v1/transactions', transaction);
      dispatch({
        type: ACTIONS.ADD_TRANSACTION,
        payload: { transaction: res.data.data },
      });
    } catch (error) {
      dispatch({
        type: ACTIONS.GET_TRANSACTIONS,
        payload: { error: error.response.data.error },
      });
    }
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export const useExpenseTrackerContext = () => {
  return useContext(ExpenseTrackerContext);
};
