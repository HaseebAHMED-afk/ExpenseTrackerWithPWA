import React, {useState} from 'react'
import "../App.css"

const Balance = () => {
    const [balance, setBalance] = useState(0)
    return (
        <div className="balance">
            <p className="balance-heading">YOUR BALANCE:</p>
            <p className="balance-amount">${balance}</p>
        </div>
    )
}

export default Balance
