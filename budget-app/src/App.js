import ExpenseContextProvider from "./contexts/ExpenseContext";
import IncomeContextProvider from "./contexts/IncomeContext";
import CategoryContextProvider from "./contexts/CategoryContext";

import Reports from "./components/reports/Reports.js";
import Expense from "./components/expense_area/Expense.js";

import Income from "./components/income_area/Income.js";
import CategoryList from "./components/category/CategoryList.js";

function App() {
  return (
    <div className="app-container">
      <ExpenseContextProvider>
        <CategoryContextProvider>
          <IncomeContextProvider>
            <h2>Overview</h2>
            <div>
              <img
                src="https://source.unsplash.com/rDEOVtE7vOs"
                alt="user photo"
                style={{
                  width: "auto",
                  height: "100px",
                  borderRadius: "20px",
                  position: "fixed",
                  position: "absolute",
                  top: "100px",
                  right: "250px",
                }}
              ></img>
            </div>
            <div className="reports-container">
              <Reports />
            </div>
            <div className="expenses-incomes">
              <div className="income-container">
                <Income />
              </div>
              <div className="expense-container">
                <Expense />
              </div>
            </div>
          </IncomeContextProvider>
        </CategoryContextProvider>
      </ExpenseContextProvider>
    </div>
  );
}

export default App;
