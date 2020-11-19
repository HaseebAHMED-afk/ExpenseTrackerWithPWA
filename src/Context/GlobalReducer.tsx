import {contextProps} from './GlobalProvider';

interface dispatchAction {
    type: string,
    payload: any
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: contextProps , action: dispatchAction) => {
    switch(action.type){
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions:[action.payload, ...state.transactions]
            };

        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter((item:any) => item.id !== action.payload)
            }
        default:
            return state
    }
}