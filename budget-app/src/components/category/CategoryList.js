import React, { useContext } from "react";
import { CategoryContext } from "../../contexts/CategoryContext";

const CategoryList = () => {
  const { categories, dispatch } = useContext(CategoryContext);

  return categories.length ? (
    <div>
      <h4>Category list:</h4>
      <ul>
        {categories.map((category) => {
          return <li key={category.id}>{category.name}</li>;
        })}
      </ul>
    </div>
  ) : (
    "no categories"
  );
};

export default CategoryList;
