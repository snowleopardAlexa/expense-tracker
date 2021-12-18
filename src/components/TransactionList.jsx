import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {

    const { transactions } = useState(GlobalContext);

    return (
        <>
        <h3>History</h3>
        {transactions.map(transaction => (
          <li className="minus">
          {transaction.text} <span>-$400</span><button class="delete-btn">x</button>
        </li>
        ))}
        <ul id="list" class="list">
        </ul>
        </>
    )
}

export default TransactionList;
