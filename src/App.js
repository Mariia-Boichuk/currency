import { useEffect, useState } from "react";
import { CurrencyRow } from "./components/CurrencyRow/CurrencyRow";
import { Header } from "./components/Header/Header";
import { getCurrencyRates } from "./services/currency";

import "./App.scss";
import { rounded } from "./utils";

function App() {
  const [currencyRates, setCurrencyRates] = useState({
    EUR: " 0.93775",
    UAH: " 36.778479",
    USD: "1",
  });

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

  // useEffect(() => {
  //   getCurrencies();
  // }, []);

  useEffect(() => {
    handleValueChange1();
  }, [currencyName1, currencyName2]);

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
          currencyNameHandler={setCurrencyName1}
        />
        <p className="text">equals</p>
        <CurrencyRow
          currencyName={currencyName2}
          amount={value2}
          amountHandler={handleValueChange2}
          currencyNameHandler={setCurrencyName2}
        />
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
