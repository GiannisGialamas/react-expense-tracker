import React from "react";

interface props {
  income: string;
  expense: string;
}

const Expenses: React.FC<props> = ({ income, expense }) => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
    </div>
  );
};

export default Expenses;
