import React, { useCallback, useContext, useState } from "react";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);
  const [showExpenses, setShowExpenses] = useState([]);
  const showHideExpenseForId = useCallback((id) => {
    // setam expenses urile pentru care vrem sa facem show(in functie de id)
    // daca exista in array inseamna ca e deschis si vrem sa il inchidem
    console.log(showExpenses)
    if( showExpenses.includes(id) ) {
      setShowExpenses(showExpenses.filter(expenseId => expenseId !== id));
      return // la al doilea click vrem sa facem hide
    }
    // la primul vrem sa facem show pentru toate cele existente
    // + pentru id-ul curent
    setShowExpenses(
      [
        ...showExpenses,
        id
      ]
    )
  }, [setShowExpenses, showExpenses])

  console.log(showExpenses)
  return expenses.length ? (
    <div>
      <ul>
        {expenses.map((expense) => {
          return (
            <li key={expense.id}>
              <ExpenseItem 
                onExpenseDetailsToggle={showHideExpenseForId}
                showExpenses={showExpenses}
                expense={expense} 
              />
            </li>

          );
        })}
      </ul>
    </div>
  ) : (
    <div>You have no expenses.</div>
  );
};

export default ExpenseList;
