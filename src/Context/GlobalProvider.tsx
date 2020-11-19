import React, {createContext,useReducer} from 'react'
import GlobalReducer from './GlobalReducer';

export interface contextProps {
    transactions: Array<any>,
    addTransaction: (a: object) => void,
    deleteTransaction: (id: number) => void
}

const initialState = {
    transactions: [],
    deleteTransaction: () => undefined,
    addTransaction: () => undefined
}

export const GlobalContext = createContext<contextProps>(initialState);

export const GlobalProvider = (props : any) : JSX.Element => {

    const [state,dispatch] = useReducer(GlobalReducer,initialState)

    function deleteTransaction(id: number){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction : object){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            addTransaction,
            deleteTransaction
        }} >
            {props.children}
        </GlobalContext.Provider>
    )
}
