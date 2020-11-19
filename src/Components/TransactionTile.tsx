import React,{useContext} from 'react'
import '../App.css'
import {GlobalContext } from '../Context/GlobalProvider'

const TransactionTile = () => {

    const { transactions } = useContext(GlobalContext)

    console.log(transactions);
    
    return (
        <div className="transaction-tile" onClick = { () => console.log('pressed')} >
            {/* <button className="del-btn">X</button> */}
             <li className="transaction-item minus">
                <p className="transaction-name">Flower</p>
                <p className="transaction-amount">1000</p>
        </li>
        </div>
    )
}

export default TransactionTile
