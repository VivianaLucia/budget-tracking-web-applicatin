import React, { createContext, useReducer, useEffect } from "react";
import { categoryReducer } from "../reducers/categoryReducer";

export const CategoryContext = createContext();

const CategoryContextProvider = (props) => {
  const [categories, dispatch] = useReducer(categoryReducer, [], () => {
    const localData = localStorage.getItem("categories");

    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return (
    <CategoryContext.Provider value={{ categories, dispatch }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
