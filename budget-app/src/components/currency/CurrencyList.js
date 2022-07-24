import React, { useContext } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import CurrencyModel from "./CurrencyModel";

const CurrencyList = ({ currencies }) => {

  return (
    <div>
        <h4>
            Available currencies:
        </h4>
      <ul>
        {currencies.map((currency, index) => {
          return (
            <li key = {index}>
              <CurrencyModel
                name={currency}
                symbol={getSymbolFromCurrency(currency)}
              />
            </li>
          );
        })}
      </ul>
      {/* <CalculateSpendingOnCurrency
        currencies={currencies}
        expenses={expenses}
      /> */}
    </div>
  );
};
export default CurrencyList;
