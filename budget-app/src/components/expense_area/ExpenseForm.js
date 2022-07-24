import React, { useContext, useState } from "react";
import { ExpenseContext } from "../../contexts/ExpenseContext";
import { CategoryContext } from "../../contexts/CategoryContext";
import { v1 as uuidv1 } from "uuid";
import getSymbolFromCurrency from "currency-symbol-map";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseForm = ({ currencies }) => {
  const { dispatch } = useContext(ExpenseContext);
  const { categories } = useContext(CategoryContext);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [currency, setCurrency] = useState("");
  const [description, setDescription] = useState("");
  const [dateAdded, setDateAdded] = useState(new Date());

  const inputStyle = {
    backgroundColor: "#5C5470",
    borderRadius: "8px",
    color: "#A2B5BB",
    fontSize: "smaller",
  };

  const labelStyle = {
    color: "#A2B5BB",
    fontSize: "smaller",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv1(),
      name: name,
      amount: amount,
      category: category,
      currency: currency,
      description: description,
      dateAdded: dateAdded,
    };
    dispatch({ type: "ADD_EXPENSE", expense });
    setName("");
    setAmount("");
    setCategory("");
    setCurrency("");
    setDescription("");
    setDateAdded();
  };

  return (
    <>
      <h4>Add new expense:</h4>
      <form onSubmit={handleSubmit}>
        <title>Expense</title>
        <label style={labelStyle}>
          Name:
          <input
            type="text"
            style={inputStyle}
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <br />
        <label style={labelStyle}>
          Amount:
          <input
            type="number"
            style={inputStyle}
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
        </label>
        <br />
        <label style={labelStyle}>
          Category:
          <select
            style={inputStyle}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""></option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label style={labelStyle}>
          Currency:
          <select
            style={inputStyle}
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
          >
            <option value=""></option>
            {currencies.map((currency) => {
              return (
                <option key={uuidv1()} value={currency}>
                  {getSymbolFromCurrency(currency)}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label style={labelStyle}>
          Description:
          <input
            type="text"
            style={inputStyle}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </label>
        <br />
        <label style={labelStyle}>
          Date added:
          <DatePicker
            selected={dateAdded}
            onChange={(dateAdded) => setDateAdded(dateAdded)}
          />
        </label>
        <input type="submit" style={inputStyle} value="Save expense" />
      </form>
    </>
  );
};
export default ExpenseForm;
