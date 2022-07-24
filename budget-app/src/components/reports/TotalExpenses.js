import React from "react";
import { TiArrowDownThick } from "react-icons/ti";

const TotalExpenses = ({ exchangeRates, expenses }) => {
  const totalExpenses = expenses.reduce((total, item) => {
    const myRate = exchangeRates.filter((a) => a.name === item.currency);

    const convertedValue = parseInt(item.amount) * parseInt(myRate[0].rate);
    return (total += convertedValue);
  }, 0);

  return (
    <div className="total-expenses">
      <div>
        <TiArrowDownThick style={{ color: "#E16428", fontSize: "25px" }} />
      </div>
      <div>
        <span style={{ fontSize: "25px" }}>{totalExpenses} RON</span>
        <br></br>
        <span style={{ color: "#A2B5BB" }}>Expense in this period</span>
      </div>
    </div>
  );
};

export default TotalExpenses;
