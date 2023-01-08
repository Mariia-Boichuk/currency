import React from "react";
import { CHOSEN_CURRENCIES } from "../constants";
import "./CurrencyRow.scss";

export const CurrencyRow = ({
  amount,
  currencyName,
  amountHandler,
  currencyNameHandler,
}) => {
  return (
    <div className="currency-row">
      <input
        type="number"
        onChange={(event) => amountHandler(event.target.value)}
        value={amount}
        className="currency-row__input"
        min={0}
      />
      <select
        onChange={(event) => currencyNameHandler(event.target.value)}
        value={currencyName}
        className="currency-row__input select"
      >
        {CHOSEN_CURRENCIES?.map((item) => (
          <option value={item} key={item} className="select__option">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
