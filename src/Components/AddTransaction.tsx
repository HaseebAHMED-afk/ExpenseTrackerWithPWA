import React, { useState,useContext } from 'react'
import { GlobalContext } from '../Context/GlobalProvider';
import '../App.css'

const AddTransaction = () => {

    const [name , setName] = useState<string>("");
    const [amount, setAmount] = useState<string>("0.00")

    const {addTransaction} = useContext(GlobalContext)

interface transactionObject {
    id: number,
    name: String,
    amount: number
}

const newTransaction = (event: any) => {
    event.preventDefault();

    const newTransaction : transactionObject = {
        id: Math.floor( Math.random() * 100000 ),
        name: name,
        amount: +amount
    }

    addTransaction(newTransaction);
    setAmount("0.00")
    setName("")
}


    return (
        <form>
        <div className="add-transaction">
            <p className="add-transaction-heading" >Add A Transaction</p>
            <hr />
            <p className="add-transaction-heading">Name:</p>
            <input type="text" value={name} className="add-transaction-text  form-control" placeholder="Enter A Transaction" required  onChange={ (event) => setName(event.target.value) }  />
            <p className="add-transaction-amount-heading">Amount:</p>
            <input type="number" value={amount} className="add-transaction-amount  form-control" placeholder="Enter An Amount" required onChange={ (event) => setAmount(event.target.value) }  />
            <button className="transaction-btn"  onClick={newTransaction} >Add Transaction</button>
        </div>
        </form>
    )
}

export default AddTransaction
