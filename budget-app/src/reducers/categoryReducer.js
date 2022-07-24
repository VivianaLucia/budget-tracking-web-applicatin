export const categoryReducer = (state, action) => {   
 

  switch (action.type) {
    case "ADD_CATEGORY":
      return [
        ...state,
        {
          name: action.category.name,
          amount: action.category.description,
          id: action.category.id,
        },
      ];
    default:
      return state;
  }
};
