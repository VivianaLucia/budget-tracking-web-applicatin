import React, {useState} from "react";
import IncomeList from "./IncomeList.js";
import IncomeForm from "./IncomeForm.js";
import { TiPlus } from "react-icons/ti";


const Income = () => {
  const currencies = ["EUR", "USD"];
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div>
      <span>Income </span>
      <button
        onClick={() => setIsOpen(true)}
        style={{ backgroundColor: "#5C5470", borderRadius: "8px" }}
      >
        <TiPlus style={{ color: "#E16428" }} />
      </button>
      {isOpen ? <IncomeForm currencies={currencies} /> : null}
      <IncomeList className="income-list" />
    </div>
  );
};

export default Income;
