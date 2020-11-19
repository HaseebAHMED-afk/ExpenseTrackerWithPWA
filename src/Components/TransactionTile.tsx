import React, { useContext } from "react";
import "../App.css";
import { GlobalContext } from "../Context/GlobalProvider";

const TransactionTile = ({ transaction }: any) => {

  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <div className="transaction-tile" onClick={() => deleteTransaction(transaction.id)}>
      <li className={`transaction-item ${ transaction.amount > 0 ? "plus" :"minus" }`}>
        <p className="transaction-name">{transaction.name}</p>
        <p className="transaction-amount">{sign}{transaction.amount}</p>
      </li>
    </div>
  );
};

export default TransactionTile;
