import { useState } from "react";
export default function Counter(){

    const [counter, setCounter] = useState(0);

    const intrementByOne = () => {
        setCounter ((prev) => prev + 1);
    }

      const decrementByOne = () => {
        setCounter ((prev) => prev - 1);
    }
    return (
        <>
            <h1>Contatore</h1>
            <p>Counter value: {counter}</p>
            <button id="incrementByOneBtn" onClick={intrementByOne}>+</button>
            
             <button id="decrementByOneBtn" onClick={decrementByOne}>-</button>
        </>
    )
}