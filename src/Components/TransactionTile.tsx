import React from 'react'
import '../App.css'

const TransactionTile = () => {
    return (
        <div className="transaction-tile" onClick = { () => console.log('pressed')} >
            {/* <button className="del-btn">X</button> */}
             <li className="transaction-item">
            <p className="transaction-amount">1000</p>
        </li>
        </div>
    )
}

export default TransactionTile
