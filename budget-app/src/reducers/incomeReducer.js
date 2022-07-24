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
            return [...arr]; //? 
      default:
        return state;
    }
  };
  