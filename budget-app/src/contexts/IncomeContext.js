import React, { createContext, useReducer, useEffect } from "react";
import { incomeReducer } from "../reducers/incomeReducer";

export const IncomeContext = createContext();

const IncomeContextProvider = (props) => {
  const [incomes, dispatch] = useReducer(incomeReducer, [], () => {
    const localData = localStorage.getItem("incomes");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);

  return (
    <IncomeContext.Provider value={{ incomes, dispatch }}>
      {props.children}
    </IncomeContext.Provider>
  );
};

export default IncomeContextProvider;
