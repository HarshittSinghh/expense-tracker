import React, { useContext } from "react";
import { GlobalContext } from "./GlobalProvider";

export const Transaction = () => {
  const { transactions } = useContext(GlobalContext);

  const handleDelete = (id) => {
    // Add delete functionality here
    console.log(`Delete transaction with ID ${id}`);
  };

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {transaction.text} <span>{transaction.amount}</span>
            <button
              className="delete-btn"
              onClick={() => handleDelete(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
