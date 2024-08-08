//Hooks....................
// Hooks are the special type of function that we use to read update values with in a component

// 1.useState..............
// useState will return an array with two values current value and a function so that means it will take two variable first one is taking current state value and 2nd one is a fucntion that we use to update state value

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
