import React, { useContext, useState } from "react";
import { CategoryContext } from "../../contexts/CategoryContext";
import { v1 as uuidv1 } from "uuid";

const CategoryForm = () => {
  const { dispatch } = useContext(CategoryContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
    const category = {
      id: uuidv1(),
      name: name,
      description: description,
    };

    dispatch({ type: "ADD_CATEGORY", category });
    setName("");
    setDescription("");
  };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <title>Category</title>
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
        <input type="submit" style={inputStyle} value="Save category" />
      </form>
     
    </>
  );
};
export default CategoryForm;
