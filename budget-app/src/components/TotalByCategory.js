import React, { useContext, useState } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

const TotalByCategory = ({ exchangeRates }) => {
  const { expenses } = useContext(ExpenseContext);
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredExpenses = expenses.filter(
    (expense) => expense.category === categoryFilter
  );
  const totalExpensesByCategory = filteredExpenses.reduce((total, item) => {
    const myRate = exchangeRates.filter((a) => a.name === item.currency);

    const convertedValue =
      parseFloat(item.amount).toFixed(2) *
      parseFloat(myRate[0].rate).toFixed(2);
    return (total += convertedValue);
  }, 0);

  return (
    <div>
      <form>
        <label>
          Calculate total expenses by following category:
          <input
            type="text"
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
            required
          />
        </label>
        <div>{totalExpensesByCategory} RON</div>
      </form>
    </div>
  );
};
export default TotalByCategory;
