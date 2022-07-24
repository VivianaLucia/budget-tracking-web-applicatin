import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import CategoryForm from "./../category/CategoryForm.js";
import { TiPlus } from "react-icons/ti";

const CalculateSpendingBasedOnCategoryList = ({
  categories,
  expenses,
  exchangeRates,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const totals = [];
  categories.forEach((categoryFilter) => {
    const filteredExpenses = expenses.filter(
      (expense) => expense.category === categoryFilter.name
    );
    const totalExpensesByEachCategory = filteredExpenses.reduce(
      (total, item) => {
        const myRate = exchangeRates.filter((a) => a.name === item.currency);

        const convertedValue = parseInt(item.amount) * parseInt(myRate[0].rate);
        return (total += convertedValue);
      },
      0
    );
    totals.push(totalExpensesByEachCategory);
  });

  const categoryNames = [];
  categories.forEach((category) => {
    categoryNames.push(category.name);
  });
  const [state] = useState({
    series: totals,

    options: {
      chart: {
        width: 380,
        type: "pie",
        foreColor: "white",
      },
      labels: categoryNames,

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],

      plotOptions: {
        pie: {
          expandOnClick: true,
        },
      },
      theme: {
        palette: "palette8",
      },
      //fill: {
      // colors: [
      //   "#FF4949",
      //   "#A149FA",
      //   "#F900BF",
      //   "#548CFF",
      //   "#06FF00",
      //   "#FBFF00",
      // ]
      //},
    },
  });

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
        width={380}
      />
      <button
        onClick={() => setIsOpen(true)}
        style={{
          backgroundColor: "#5C5470",
          color: "#A2B5BB",
          borderRadius: "8px",
          fontSize: "smaller",
        }}
      >
        <TiPlus style={{ color: "#E16428" }} />
        Add category
      </button>
      {isOpen ? <CategoryForm /> : null}
    </div>
  );
};
export default CalculateSpendingBasedOnCategoryList;
