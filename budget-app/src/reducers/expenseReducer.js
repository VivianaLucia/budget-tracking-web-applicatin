export const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [
        ...state,
        {
          name: action.expense.name,
          amount: action.expense.amount,
          category: action.expense.category,
          currency: action.expense.currency,
          description: action.expense.description,
          dateAdded: action.expense.dateAdded,
          id: action.expense.id,
        },
      ];
    case "REMOVE_EXPENSE":
      const arr = state.filter((expense) => expense.id !== action.id);
      return [...arr];

    case "EDIT_EXPENSE":
      const newState = state.map((expense) => {
        if (expense.id === action.expense.id) {
          return {
            id: expense.id,
            name: action?.expense?.name ? action.expense.name : expense.name,
            amount: action?.expense?.amount
              ? action.expense.amount
              : expense.amount,
            category: action?.expense?.category
              ? action.expense.category
              : expense.category,
            currency: action?.expense?.currency
              ? action.expense.currency
              : expense.currency,
            description: action?.expense?.description
              ? action.expense.description
              : expense.description,
            dateAdded: action?.expense?.dateAdded
              ? action.expense.dateAdded
              : expense.dateAdded,
          };
        }
        return expense;
      });
      return [...newState];
    default:
      return state;
  }
};
