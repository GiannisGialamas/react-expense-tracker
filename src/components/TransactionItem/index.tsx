import React from "react";
import { GlobalContext } from "../../context/GlobalState";

interface props {
  id: number;
  text: string;
  amount: number;
}

const TransactionItem: React.FC<props> = ({ id, text, amount }) => {
  const { deleteTransaction }: any = React.useContext(GlobalContext);
  const status = amount < 0 ? "-" : "+";
  const style = amount < 0 ? "minus" : "plus";

  return (
    <li className={style}>
      {text}{" "}
      <span>
        {status}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

export default TransactionItem;
