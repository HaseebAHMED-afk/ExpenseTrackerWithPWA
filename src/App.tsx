import React from 'react'
import "./App.css"
import AddTransaction from './Components/AddTransaction'
import Balance from './Components/Balance'
import IncomeExpense from './Components/IncomeExpense'
import TransactionHistory from './Components/TransactionHistory'
import { GlobalProvider } from './Context/GlobalProvider'

const App = () => {
  return (
    <GlobalProvider>
    <div className="app">
      <h1 className="main-heading" >
        EXPENSE TRACKER
      </h1>
      <Balance />
      <IncomeExpense />
      <TransactionHistory />
      <AddTransaction />
    </div>
    </GlobalProvider>
  )
}

export default App
