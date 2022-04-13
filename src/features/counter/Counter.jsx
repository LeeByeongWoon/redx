import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreament, fetchIncreament, increament, increamentByAmount } from "./counterSlice";

export default function Counter() {
    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();
    return (
        <div>
            <span>{count}</span>
            <div>
                <button onClick={() => dispatch(increament())}>increament</button>
                <button onClick={() => dispatch(fetchIncreament(count))}>fetch Increament</button>
                <button onClick={() => dispatch(decreament())}>decreament</button>
                <button onClick={() => dispatch(increamentByAmount(5))}>add_Value</button>
            </div>
        </div>
    );
}
