import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)

    const addCash = () => {
        dispatch({type:"ADD_CASH", payload: 5})
    }

    const getCash = () => {
        dispatch({type:"GET_CASH", payload: 5})
    }

    return (
        <div className={'app'}>
            <div class="mt-10 text-green-200">{cash}</div>
            <div class="flex justify-center mb-20">
                <button onClick={() => addCash()} class="bg-green-500">ADD</button>
                <button onClick={() => getCash()} class="bg-red-500">GET</button>
            </div>
        </div>
    )
}

export default App;