import { useEffect, useState } from "react";
import { CurrencyRow } from "./components/CurrencyRow/CurrencyRow";
import { Header } from "./components/Header/Header";
import { getCurrencyRates } from "./services/currency";

import "./App.scss";
import { rounded } from "./utils";

function App() {
  const [currencyRates, setCurrencyRates] = useState(null);

  const [error, setError] = useState("");
  const [currencyName1, setCurrencyName1] = useState("EUR");
  const [currencyName2, setCurrencyName2] = useState("UAH");
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);

  const getCurrencies = async () => {
    try {
      const response = await getCurrencyRates();
      setCurrencyRates(response.data.rates);

      setError("");
    } catch (e) {
      setError("something gone wrong when loading currencies");
    }
  };

  const handleValueChange1 = (value) => {
    setValue2(
      rounded(
        (value * currencyRates[currencyName2]) / currencyRates[currencyName1]
      )
    );
    setValue1(value);
  };

  const handleValueChange2 = (value) => {
    setValue1(
      rounded(
        (value * currencyRates[currencyName1]) / currencyRates[currencyName2]
      )
    );

    setValue2(value);
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  useEffect(() => {
    if (!!currencyRates) {
      handleValueChange1(1);
    }
  }, [currencyRates]);

  const handleCurrency1Change = (currency1) => {
    setValue2(
      rounded(
        (value1 * currencyRates[currencyName2]) / currencyRates[currency1]
      )
    );
    setCurrencyName1(currency1);
  };

  const handleCurrency2Change = (currency2) => {
    setValue1(
      rounded(
        (value2 * currencyRates[currencyName1]) / currencyRates[currency2]
      )
    );
    setCurrencyName2(currency2);
  };

  return (
    <div className="wrapper">
      <Header rates={currencyRates} />
      <h1 className="heading">Currency converter</h1>
      <p className="text">only positive numbers allowed</p>

      <div className="currency-inputs">
        <CurrencyRow
          currencyName={currencyName1}
          amountHandler={handleValueChange1}
          amount={value1}
          currencyNameHandler={handleCurrency1Change}
        />
        <p className="text">equals</p>
        <CurrencyRow
          currencyName={currencyName2}
          amount={value2}
          amountHandler={handleValueChange2}
          currencyNameHandler={handleCurrency2Change}
        />
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
