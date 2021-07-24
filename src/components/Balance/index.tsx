import React from "react";

interface props {
  balance: string;
}

const Balance: React.FC<props> = ({ balance }) => {
  return (
    <React.Fragment>
      <h4>Account Balance</h4>
      <h1>${balance}</h1>
    </React.Fragment>
  );
};

export default Balance;
