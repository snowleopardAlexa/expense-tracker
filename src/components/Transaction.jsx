import React from 'react'

function Transaction({ transaction }) {
    return (
        <div>
        <li className="minus">
          {transaction.text} <span>-$400</span><button class="delete-btn">x</button>
        </li>
        </div>
    )
}

export default Transaction;
