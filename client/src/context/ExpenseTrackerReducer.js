export const ACTIONS = {
  GET_TRANSACTIONS: 'get-transactions',
  DELETE_TRANSACTION: 'delete-transaction',
  ADD_TRANSACTION: 'add-transaction',
  TRANSACTION_ERROR: 'transaction-error',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: action.payload.transactions,
      };
    case ACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        ),
      };
    case ACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload.transaction],
      };
    case ACTIONS.TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default reducer;
