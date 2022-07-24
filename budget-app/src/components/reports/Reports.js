import CalculateSpendingBasedOnCategoryList from "./../reports/CalculateSpendingBasedOnCategoryList.js";
import TotalExpenses from "./TotalExpenses.js";
import TotalIncomes from "./TotalIncomes.js";
import CalculateSpendingOnCurrency from "./CalculateSpendingOnCurrency.js";

import React, { useContext } from "react";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import { CategoryContext } from "../../contexts/CategoryContext";
import { IncomeContext } from "../../contexts/IncomeContext";

import CurrentBudget from "./CurrentBudget.js";

const Reports = () => {
  const { expenses } = useContext(ExpenseContext);
  const { categories } = useContext(CategoryContext);
  const { incomes } = useContext(IncomeContext);

  const currencies = ["EUR", "USD", "GBP", "RSD"];

  const exchangeRates = [
    { name: "EUR", rate: "4.9430" },
    { name: "USD", rate: "4.8926" },
    { name: "GBP", rate: "5.8059" },
    { name: "RSD", rate: "0.0420" },

  ];

  return (
    <div>
      <h4>Reports</h4>
      <div>
        <CurrentBudget
          expenses={expenses}
          incomes={incomes}
          exchangeRates={exchangeRates}
        />
      </div>
      <div className="main-reports">
        <div className="chart">
          <CalculateSpendingBasedOnCategoryList
            categories={categories}
            expenses={expenses}
            exchangeRates={exchangeRates}
          />
        </div>

        <div className="totals">
          <TotalIncomes exchangeRates={exchangeRates} incomes={incomes} />
          <TotalExpenses exchangeRates={exchangeRates} expenses={expenses} />
        </div>
      </div>

      <span className="spendings-on-currency">
        <CalculateSpendingOnCurrency
          currencies={currencies}
          expenses={expenses}
        />
      </span>
    </div>
  );
};

export default Reports;
