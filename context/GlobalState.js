import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Create Provider component
export const GlobalProvider = ({ children }) => {
  // Fixed typo "childern" to "children"
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children} {/* Fixed typo "childern" to "children" */}
    </GlobalContext.Provider>
  );
};
