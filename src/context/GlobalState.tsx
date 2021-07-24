import React from "react";
import AppReducer from "./AppReducer";

export type Transaction = {
  id: number;
  text: string;
  amount: number;
};

export type InitialState = {
  transactions: Transaction[];
  deleteTransaction?: (id: number) => void;
  addTransaction?: (transaction: Transaction) => void;
};

const initialState: InitialState = {
  transactions: [],
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  const addTransaction = (transaction: Transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const deleteTransaction = (id: number) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
