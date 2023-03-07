import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from './counterSlice';

export default function Counter() {
    const count = useSelector((state) =>
    state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            <div>
               Counter:
                 <span>{count}</span>
                 <br></br>
                 <form>
                 <input type="number" required></input>
                 <button
                    aria-label="Increment value"
                    onClick={(event) => {
                        event.preventDefault(); // prevent page reload
                        const inputValue = parseInt(document.getElementsByTagName("input")[0].value, 10);
                        console.log("Parsed input value:", inputValue);
                        dispatch(incrementByAmount(inputValue))}
    }
>
    Increment by Amount
</button>
                 </form>

                 
            </div>
        </div>
    )
}