import React, { useContext, useState } from "react";
import { IncomeContext } from "../../contexts/IncomeContext";
import IncomeItem from "./IncomeItem";

const IncomeList = () => {
  const { incomes } = useContext(IncomeContext);
  const [showIncome, setShowIncome] = useState(false);

  return incomes.length ? (
    <div>
      <ul>
        {incomes.map((income) => {
          return (
            <li
              key={income.id}
              onClick={() => {
                setShowIncome(true);
              }}
            >
              {showIncome ? (
                <IncomeItem income={income} key={income.id}></IncomeItem>
              ) : (
                <div
                  key={income.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "200px",
                  }}
                >
                  {" "}
                  <div>{income.name}</div>
                  <div>
                    {income.amount} {income.currency}
                  </div>{" "}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div>You have no incomes.</div>
  );
};

export default IncomeList;
