import React from 'react'
import '../App.css'

const AddTransaction = () => {
    return (
        <div className="add-transaction">
            <p className="add-transaction-heading" >Add A Transaction</p>
            <label>Name:</label>
            <input type="text" className="add-transaction-text" />
        </div>
    )
}

export default AddTransaction
