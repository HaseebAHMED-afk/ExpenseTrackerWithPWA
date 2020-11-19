import React from 'react'
import "../App.css"
import TransactionTile from './TransactionTile'

const TransactionHistory = () => {
    return (
        <div className="transaction-history">
            <p className="transaction-history-heading">
                History
            </p>
            <hr />
            <TransactionTile />
            <TransactionTile />
        </div>
    )
}

export default TransactionHistory
