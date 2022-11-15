import React from "react";
import { ReactDOM } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import Link from "next/link";
import Navbar from "./navbar";

const defaultState = {
    cash: 0,
}

const reduser = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload}
        case "GET_CASH":
            return {...state, cash: state.cash - action.payload}
        default: 
            return state
    }
}

const store = createStore(reduser)



const Redux = () => {

    return (
        <Provider store={store}>
            <div class="text-center">
                <Navbar />

                <App />

                <Link href="/" class="bg-blue-400 py-2 px-4 rounded-full ">Home</Link>
             </div>
         </Provider>
         
    );
}

export default Redux;