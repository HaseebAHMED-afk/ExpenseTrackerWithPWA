import React,{useContext} from 'react'
import "../App.css"
import TransactionTile from './TransactionTile'
import {GlobalContext} from '../Context/GlobalProvider'

const TransactionHistory = () => {

    const {transactions} = useContext(GlobalContext)
    
    return (
        <div className="transaction-history">
            <p className="transaction-history-heading">
                History
            </p>
            <hr />
            {
                transactions.map((transaction) => <TransactionTile transaction={transaction} key={transaction.id} />)
            }
        </div>
    )
}

export default TransactionHistory
