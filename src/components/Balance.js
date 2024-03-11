import React, { useContext } from "react";
import { GlobalContext } from "./GlobalProvider";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext); // Corrected variable name
  const amounts = transactions.map((transaction) => transaction.amount); // Corrected variable name
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
