import React, { useState } from "react";
import ExpenseList from "./ExpenseList.js";
import ExpenseForm from "./ExpenseForm.js";
import { TiPlus } from "react-icons/ti";

const Expense = () => {
  const currencies = ["EUR", "USD"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <span>Expense </span>
      <button
        onClick={() => setIsOpen(true)}
        style={{ backgroundColor: "#5C5470", borderRadius: "8px" }}
      >
        <TiPlus style={{ color: "#E16428" }} />
      </button>
      {isOpen ? <ExpenseForm currencies={currencies} /> : null}
      <ExpenseList className="expense-list" />
    </div>
  );
};

export default Expense;
