import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const inputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex flex-col sm:flex-row gap-3 ${className}`}>
      <div className="w-full sm:w-1/2">
        <label htmlFor={inputId} className="text-black/60 mb-1 inline-block">
          {label}
        </label>
        <input
          id={inputId}
          type="number"
          placeholder="Amount"
          className="w-full bg-transparent py-1.5 outline-none border-b border-gray-300 focus:border-blue-500"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="w-full sm:w-1/2">
        <label htmlFor={`${inputId}-select`} className="text-black/60 mb-1 inline-block">
          Currency Type
        </label>
        <select
          id={`${inputId}-select`}
          className="w-full rounded-md px-2 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.length === 0 ? (
            <option disabled>Loading...</option>
          ) : (
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
