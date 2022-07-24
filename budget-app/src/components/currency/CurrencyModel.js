import React from "react";

const CurrencyModel = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.symbol}</span>
    </div>
  );
};
export default CurrencyModel;
