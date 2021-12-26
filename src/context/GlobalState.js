import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state 
const initialState = {
    transactions: [
        { id: 1, text: 'Book', amount: -20 },
        { id: 2, text: 'Book', amount: 20 },
        { id: 3, text: 'Book', amount: -20 },
        { id: 4, text: 'Book', amount: -120 },
    ]
}

// create context 
export const GlobalContext =  createContext(initialState);

// create provider component
export const GlobalProvider = ( { children } ) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   return (<GlobalContext.Provider value={{
       transactions: state.transactions
   }}>
        {children}
   </GlobalContext.Provider>);
}

