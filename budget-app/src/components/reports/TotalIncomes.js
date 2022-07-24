import React from "react";
import { TiArrowUpThick } from "react-icons/ti";

const TotalIncomes = ({ exchangeRates, incomes }) => {
  const totalIncomes = incomes.reduce((total, item) => {
    const myRate = exchangeRates.filter((a) => a.name === item.currency);

    const convertedValue = parseInt(item.amount) * parseInt(myRate[0].rate);
    return (total += convertedValue);
  }, 0);

  return (
    <div className="total-incomes">
      <div>
        <TiArrowUpThick style={{ color: "#E16428", fontSize: "25px" }} />
      </div>
      <div>
        <span style={{ fontSize: "25px" }}>{totalIncomes} RON</span>
        <br></br>
        <span style={{ color: "#A2B5BB" }}>Income in this period</span>
      </div>
    </div>
  );
};

export default TotalIncomes;
