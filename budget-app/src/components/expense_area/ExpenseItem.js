import React, { useContext, useState, useCallback } from "react";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseItem = ({ expense, showExpenses, onExpenseDetailsToggle }) => {
  const { dispatch } = useContext(ExpenseContext);
  const [expenseName, setExpenseName] = useState(expense.name);
  const [expenseAmount, setExpenseAmount] = useState(expense.amount);
  const [expenseCategory, setExpenseCategory] = useState(expense.category);
  const [expenseCurrency, setExpenseCurrency] = useState(expense.currency);
  const [expenseDescription, setExpenseDescription] = useState(
    expense.description
  );

  const [expenseDateAdded, setExpenseDateAdded] = useState(expense.dateAdded);

  const onChangeExpenseName = (e) => {
    setExpenseName(e.target.value);
  };
  const onChangeExpenseAmount = (e) => {
    setExpenseAmount(e.target.value);
  };
  const onChangeExpenseCategory = (e) => {
    setExpenseCategory(e.target.value);
  };
  const onChangeExpenseCurrency = (e) => {
    setExpenseCurrency(e.target.value);
  };
  const onChangeExpenseDescription = (e) => {
    setExpenseDescription(e.target.value);
  };
  const onChangeExpenseDateAdded = (expenseDateAdded) => {
    setExpenseDateAdded(expenseDateAdded);
  };
  const inputStyle = {
    backgroundColor: "#5C5470",
    borderRadius: "8px",
    color: "#A2B5BB",
    fontSize: "smaller",
  };
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({
        type: "EDIT_EXPENSE",
        expense: {
          name: expenseName,
          amount: expenseAmount,
          category: expenseCategory,
          currency: expenseCurrency,
          dateAdded: expenseDateAdded,
          description: expenseDescription,
          id: expense.id,
        },
      });
      console.log(expense);
      onExpenseDetailsToggle(expense.id);
    },
    [
      expenseName,
      expenseAmount,
      expenseCategory,
      expenseCurrency,
      expenseDateAdded,
      expenseDescription,
      expense,
      dispatch,
    ]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "EDIT_EXPENSE",
      expense: {
        expenseName,
        expenseAmount,
        expenseCategory,
        expenseCurrency,
        expenseDateAdded,
        expenseDescription,
        id: expense.id,
      },
    });
  };

  const handleDelete = () => {
    dispatch({ type: "REMOVE_EXPENSE", id: expense.id });
  };

  const toggleExpenseDetails = useCallback(() => {
    onExpenseDetailsToggle(expense.id)
  }, [onExpenseDetailsToggle, expense])

  if (!showExpenses.includes(expense.id)) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          backgroundColor: 'green'
        }}
        onClick={toggleExpenseDetails}
      >
        <div>{expense.name}</div>
        <div>
          {expense.amount} {expense.currency}
        </div>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChangeExpenseName}
          value={expenseName}
          placeholder={expense.name}
          style={inputStyle}
        />
        <input
          onChange={onChangeExpenseAmount}
          value={expenseAmount}
          placeholder={expense.amount}
          style={inputStyle}
        />
        <input
          onChange={onChangeExpenseCategory}
          value={expenseCategory}
          placeholder={expense.category}
          style={inputStyle}
        />
        <input
          onChange={onChangeExpenseCurrency}
          value={expenseCurrency}
          placeholder={expense.currency}
          style={inputStyle}
        />
        <input
          onChange={onChangeExpenseDescription}
          value={expenseDescription}
          placeholder={expense.description}
          style={inputStyle}
        />
        <input
          value={expenseDateAdded}
          onChange={onChangeExpenseDateAdded}
          placeholder={expense.dateAdded}
          style={inputStyle}
        />

        <button type="submit" value="Submit" style={inputStyle}>
          Save
        </button>
      </form>
      <button onClick={handleDelete} style={inputStyle}>
        Delete
      </button>
    </>
  );
};

export default ExpenseItem;
