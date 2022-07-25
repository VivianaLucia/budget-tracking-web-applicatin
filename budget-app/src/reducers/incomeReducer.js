export const incomeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return [
        ...state,
        {
          name: action.income.name,
          amount: action.income.amount,
          currency: action.income.currency,
          description: action.income.description,
          dateAdded: action.income.dateAdded,
          id: action.income.id,
        },
      ];
    case "REMOVE_INCOME":
      const arr = state.filter((income) => income.id !== action.id);
      return [...arr]; 
    case "EDIT_INCOME":
      const newState = state.map((income) => {
        if (income.id === action.income.id) {
          return {
            id: income.id,
            name: action?.income?.name ? action.income.name : income.name,
            amount: action?.income?.amount
              ? action.income.amount
              : income.amount,

            currency: action?.income?.currency
              ? action.income.currency
              : income.currency,
            description: action?.income?.description
              ? action.income.description
              : income.description,
            dateAdded: action?.income?.dateAdded
              ? action.income.dateAdded
              : income.dateAdded,
          };
        }
        return income;
      });
      return [...newState];
    default:
      return state;
  }
};
