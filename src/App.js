import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { Transaction } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./components/GlobalProvider";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <Transaction />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
