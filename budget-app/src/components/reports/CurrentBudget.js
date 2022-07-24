import React from "react";
import { TiChartBarOutline } from "react-icons/ti";

const CurrentBudget = ({ expenses, incomes, exchangeRates }) => {
  const totalExpenses = expenses.reduce((total, item) => {
    const myRate = exchangeRates.filter((a) => a.name === item.currency);

    const convertedValue = parseInt(item.amount) * parseInt(myRate[0].rate);
    return (total += convertedValue);
  }, 0);

  const totalIncomes = incomes.reduce((total, item) => {
    const myRate = exchangeRates.filter((a) => a.name === item.currency);

    const convertedValue = parseInt(item.amount) * parseInt(myRate[0].rate);
    return (total += convertedValue);
  }, 0);

  return (
    <div className="current-budget">
      <div>
        <TiChartBarOutline style={{ color: "#E16428", fontSize: "25px" }} />
      </div>
      <div>
        <span style={{ fontSize: "25px" }}>
          {(totalIncomes - totalExpenses).toFixed(2)} RON
        </span>
        <br></br>
        <span style={{ color: "#A2B5BB" }}>is your current budget</span>
      </div>
    </div>
  );
};
export default CurrentBudget;
