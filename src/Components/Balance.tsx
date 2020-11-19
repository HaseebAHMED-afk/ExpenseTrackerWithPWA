import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalProvider'
import "../App.css"

const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    let amount = transactions.map((transaction) => transaction.amount);
    let balance = amount.reduce((acc,item) => (acc += item),0).toFixed(2)

    return (
        <div className="balance">
            <p className="balance-heading">YOUR BALANCE:</p>
            <p className="balance-amount">${balance}</p>
        </div>
    )
}

export default Balance
