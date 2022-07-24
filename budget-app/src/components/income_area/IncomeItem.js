import React, { useContext, useState, useCallback } from "react";
import { IncomeContext } from "../../contexts/IncomeContext";
import "react-datepicker/dist/react-datepicker.css";

const IncomeItem = ({ income }) => {
  const { dispatch } = useContext(IncomeContext);
  const [incomeName, setIncomeName] = useState(income.name);
  const [incomeAmount, setIncomeAmount] = useState(income.amount);
  const [incomeCurrency, setIncomeCurrency] = useState(income.currency);
  const [incomeDescription, setIncomeDescription] = useState(
    income.description
  );

  const [incomeDateAdded, setIncomeDateAdded] = useState(income.dateAdded);

  const onChangeIncomeName = (e) => {
    setIncomeName(e.target.value);
  };
  const onChangeIncomeAmount = (e) => {
    setIncomeAmount(e.target.value);
  };

  const onChangeIncomeCurrency = (e) => {
    setIncomeCurrency(e.target.value);
  };
  const onChangeIncomeDescription = (e) => {
    setIncomeDescription(e.target.value);
  };
  const onChangeIncomeDateAdded = (incomeDateAdded) => {
    setIncomeDateAdded(incomeDateAdded);
  };
  const inputStyle = {
    backgroundColor: "#5C5470",
    borderRadius: "8px",
    color: "#A2B5BB",
    fontSize: "smaller",
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({
        type: "EDIT_INCOME",
        income: {
          name: incomeName,
          amount: incomeAmount,
          currency: incomeCurrency,
          dateAdded: incomeDateAdded,
          description: incomeDescription,
          id: income.id,
        },
      });
    },
    [
      incomeName,
      incomeAmount,

      incomeCurrency,
      incomeDateAdded,
      incomeDescription,
      income,
      dispatch,
    ]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "EDIT_INCOME",
      income: {
        incomeName,
        incomeAmount,
        incomeCurrency,
        incomeDateAdded,
        incomeDescription,
        id: income.id,
      },
    });
  };
  const handleDelete = () => {
    dispatch({ type: "REMOVE_INCOME", id: income.id });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChangeIncomeName}
          value={incomeName}
          placeholder={income.name}
          style={inputStyle}
        />
        <input
          onChange={onChangeIncomeAmount}
          value={incomeAmount}
          placeholder={income.amount}
          style={inputStyle}
        />

        <input
          onChange={onChangeIncomeCurrency}
          value={incomeCurrency}
          placeholder={income.currency}
          style={inputStyle}
        />
        <input
          onChange={onChangeIncomeDescription}
          value={incomeDescription}
          placeholder={income.description}
          style={inputStyle}
        />
        <input
          value={incomeDateAdded}
          onChange={onChangeIncomeDateAdded}
          placeholder={income.dateAdded}
          style={inputStyle}
        />
        <button type="submit" value="Submit" style={inputStyle}>
          Save
        </button>
      </form>
      <button onClick={handleDelete} style={inputStyle}>
        Delete
      </button>
    </>
  );
};

export default IncomeItem;
