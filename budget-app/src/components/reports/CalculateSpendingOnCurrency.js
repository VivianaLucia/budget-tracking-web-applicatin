import React from "react";
import { TiArrowDown } from "react-icons/ti";

const CalculateSpendingOnCurrency = ({ currencies, expenses }) => {
  const totals = [];
  currencies.forEach((currencyFilter) => {
    const filteredExpenses = expenses.filter(
      (expense) => expense.currency === currencyFilter
    );
    const totalExpensesByEachCurrency = filteredExpenses.reduce(
      (total, item) => {
        return (total += parseFloat(item.amount));
      },
      0
    );
    totals.push(totalExpensesByEachCurrency);
  });
  return (
    <div>
      <div style={{ color: "#A2B5BB"}}>
        Currency based spendings:
      </div>
      <ul>
        {totals.map((item, index) => {
          return (
            <li key={index} style={{ listStyleType: "none", display: "flex" ,fontSize: "medium", textAlign: "center"}}>
              <TiArrowDown style={{ color: "#F806CC" ,fontSize: "25px"  }}/>
              {item} {currencies[index]}
            </li>
          );
        })}
      </ul>
      
    </div>
  );
};
export default CalculateSpendingOnCurrency;
