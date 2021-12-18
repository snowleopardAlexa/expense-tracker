import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {

    const { transactions } = useState(GlobalContext);

    return (
        <>
        <h3>History</h3>
        {transactions.map(transaction => (<Transaction />))}
        <ul id="list" class="list">
        </ul>
        </>
    )
}

export default TransactionList;
