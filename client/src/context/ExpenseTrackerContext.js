import { createContext, useReducer, useContext } from 'react';
import ExpenseTrackerReducer, { ACTIONS } from './ExpenseTrackerReducer';

const initialState = {
  transactions: [],
};

export const ExpenseTrackerContext = createContext(initialState);

export const ExpenseTrackerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseTrackerReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: ACTIONS.DELETE_TRANSACTION, payload: { id } });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: ACTIONS.ADD_TRANSACTION, payload: { transaction } });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export const useExpenseTrackerContext = () => {
  return useContext(ExpenseTrackerContext);
};
