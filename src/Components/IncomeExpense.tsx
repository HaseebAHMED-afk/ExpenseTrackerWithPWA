import React, {useState} from 'react'
import '../App.css'

const IncomeExpense = () => {
    const [income, setIncome] = useState(0.00)
    const [expense, setExpense] = useState(0.00)
    return (
        <div className="income-expense">
            <div className="income-section">
                <h4 className="income-heading">Income</h4>
                <p className="income-balance">${income}</p>
            </div>
            <div className="expense-section">
                <h4 className="expense-heading">Expense</h4>
                <p className="expense-balance">${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
