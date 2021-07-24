import React from "react";

interface props {
  children: React.ReactNode;
}

const TransactionList: React.FC<props> = ({ children }) => {
  return (
    <React.Fragment>
      <h3>History</h3>
      <ul className="list">{children}</ul>
    </React.Fragment>
  );
};

export default TransactionList;
