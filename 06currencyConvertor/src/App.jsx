import React, { useState } from "react";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = {
    usd: 1,
    inr: 82.65,
    eur: 0.91,
    gbp: 0.75,
  };

  const options = Object.keys(currencyInfo);

  const swap = () => {
    const tempFrom = from;
    const tempAmount = amount;

    setFrom(to);
    setTo(tempFrom);
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
  };

  const convert = () => {
    if (!currencyInfo[to] || !amount) return;
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-no-repeat flex items-center justify-center p-6"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div className="relative z-10 w-full max-w-md mx-auto rounded-xl p-6 bg-white/60 backdrop-blur-md shadow-lg space-y-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={setFrom}
            selectCurrency={from}
            onAmountChange={setAmount}
          />

          <div className="flex justify-center my-4">
            <button
              type="button"
              className="border-2 border-white rounded-full bg-blue-600 text-white px-4 py-1 text-sm shadow-md hover:bg-blue-700 transition"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={setTo}
            selectCurrency={to}
            amountDisable
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
