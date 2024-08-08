//Hooks....................
// Hooks are the special type of function that we use to read update values with in a component

// useState: useState returns an array with two elements: the current state value and a function to update that value. The first element is the current state, and the second is the function used to update it.
import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
        if (count == 0) {
            setCount(0)
        }
    }
    return (
        <div className='bg-white h-96 w-96 rounded-3xl flex justify-center flex-col items-center gap-20 font-bold text-2xl'>
            <div className=''> Count: {count}</div>
            <div className='flex gap-5 '>
                <button onClick={increment} className='bg-slate-200 rounded-2xl px-4 py-6 hover:bg-slate-400'>++</button>
                <button onClick={decrement} className='bg-slate-200 rounded-2xl px-5 py-6 hover:bg-slate-400'>--</button>
            </div>
        </div>


    )
}
