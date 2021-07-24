import React from "react";
import { GlobalContext } from "./context/GlobalState";
import { getExpense, getIncome } from "./util/Math";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Expenses from "./components/Expenses";
import TransactionList from "./components/TransactionList";
import TransactionItem from "./components/TransactionItem";
import TransactionAdd from "./components/TransactionAdd";

const App: React.FC = () => {
  const { transactions } = React.useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <Header />
      <div className="container">
        <Balance balance={total} />
        <Expenses income={getIncome(amounts)} expense={getExpense(amounts)} />
        <TransactionList>
          {transactions.map(({ id, text, amount }) => (
            <TransactionItem id={id} text={text} amount={amount} />
          ))}
        </TransactionList>
        <TransactionAdd />
      </div>
    </div>
  );
};

export default App;
