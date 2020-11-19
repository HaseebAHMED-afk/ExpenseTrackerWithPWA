import React from 'react'
import '../App.css'

const AddTransaction = () => {
    return (
        <div className="add-transaction">
            <p className="add-transaction-heading" >Add A Transaction</p>
            <p className="add-transaction-heading">Name:</p>
            <input type="text" className="add-transaction-text" placeholder="Enter A Transaction" />
            <p className="add-transaction-amount-heading">Name:</p>
            <input type="number" className="add-transaction-amount" placeholder="Enter An Amount" />
            <button className="transaction-btn">Add Transaction</button>
        </div>
    )
}

export default AddTransaction
