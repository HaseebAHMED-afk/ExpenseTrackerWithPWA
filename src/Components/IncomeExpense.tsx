import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalProvider'
import '../App.css'

const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext);

    const amount = transactions.map((transaction) => transaction.amount);
    const income = amount.filter((item) => item > 0).reduce((acc,item) => (acc+=item), 0).toFixed(2);
    const expense = amount.filter((item) => item < 0).reduce((acc,item) => (acc+=item), 0).toFixed(2);
    


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
