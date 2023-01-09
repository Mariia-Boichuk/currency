import React from "react";
import { rounded } from "../../utils";
import "./Header.scss";

export const Header = ({ rates }) => {
  let currencyRates;

  if (rates) {
    const { UAH, USD, EUR } = rates;

    currencyRates = [
      {
        label: "EUR",
        value: rounded(UAH / EUR),
      },
      {
        label: "USD",
        value: rounded(UAH / USD),
      },
    ];
  }

  return (
    <header className="header">
      <ul className="header__currencies">
        {rates &&
          currencyRates?.map((item) => (
            <li className="header__currency-item" key={item.value}>
              <span className="currency-item__name"> {item.label}</span>
              <span className="currency-item__value"> {item.value}</span>
            </li>
          ))}
      </ul>
    </header>
  );
};
