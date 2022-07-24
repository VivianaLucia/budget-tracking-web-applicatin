import React, { useContext, useState } from "react";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);
  const [showExpense, setShowExpense] = useState(false);

  return expenses.length ? (
    <div>
      <ul>
        {expenses.map((expense) => {
          return (
            <li
              key={expense.id}
              onClick={() => {
                setShowExpense(true);
              }}
            >
              {showExpense ? (
                <ExpenseItem expense={expense} key={expense.id}></ExpenseItem>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "200px",
                  }}
                  key={expense.id}
                >
                  <div>{expense.name}</div>
                  <div>
                    {expense.amount} {expense.currency}
                  </div>
                </div>
              )}
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
