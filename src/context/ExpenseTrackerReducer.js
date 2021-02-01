export const ACTIONS = {
  DELETE_TRANSACTION: 'delete-transaction',
  ADD_TRANSACTION: 'add-transaction',
};

const reducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
