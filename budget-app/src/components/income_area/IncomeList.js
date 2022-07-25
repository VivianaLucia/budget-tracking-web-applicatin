import React, { useContext, useState, useCallback } from "react";
import { IncomeContext } from "../../contexts/IncomeContext";
import IncomeItem from "./IncomeItem";

const IncomeList = () => {
  const { incomes } = useContext(IncomeContext);
  const [showIncomes, setShowIncomes] = useState([]);
  const showHideIncomeForId = useCallback(
    (id) => {
      // setam expenses urile pentru care vrem sa facem show(in functie de id)
      // daca exista in array inseamna ca e deschis si vrem sa il inchidem
      console.log(showIncomes);
      if (showIncomes.includes(id)) {
        setShowIncomes(showIncomes.filter((incomeId) => incomeId !== id));
        return; // la al doilea click vrem sa facem hide
      }
      // la primul vrem sa facem show pentru toate cele existente
      // + pentru id-ul curent
      setShowIncomes([...showIncomes, id]);
    },
    [setShowIncomes, showIncomes]
  );

  console.log(showIncomes);
  return incomes.length ? (
    <div>
      <ul>
        {incomes.map((income) => {
          return (
            <li key={income.id}>
              <IncomeItem
                onIncomeDetailsToggle={showHideIncomeForId}
                showIncomes={showIncomes}
                income={income}
              />
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
