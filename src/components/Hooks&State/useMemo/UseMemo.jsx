
// usemomo nothing but its same as useeffect that have return something
// The useMemo hook is all about memoization. Memoization is a technique where the result of an expensive function or expression is cached so that it's only recomputed when its dependencies change. Here's a breakdown:

// Purpose: useMemo is used to memoize (cache) the result of a function or an expression. This can improve performance by preventing unnecessary calculations.

// Usage: You provide a function and an array of dependencies to useMemo. React executes the function and caches its result. If the dependencies change, the function is re-executed, and the result is updated.

// Typical Use Cases: Memoization is useful for computationally expensive calculations or preventing unnecessary re-renders of components.

import React, { useMemo, useState } from "react"

const Factorial = ({ number }) => {
    const calculateFactorial = (n) => {
        return (n <= 0 ? 1 : n * calculateFactorial(n - 1))
    }
    const factorial = useMemo(() => {
        return calculateFactorial(number);
    }, [number])
    return (
        <div>Factorial of {number} : {factorial}</div>
    )
}
const UseMemo = () => {
    const [number, setNumber] = useState(5)
    return (
        <div className='bg-white h-96 w-96 rounded-3xl flex  justify-center flex-col items-center gap-20 font-bold text-2xl'>
            <div><Factorial number={number} /></div>
            <button onClick={() => setNumber(number + 1)} className='bg-slate-200 rounded-2xl px-5 py-6 hover:bg-slate-400'>++</button>
        </div>
    )
}

export default UseMemo
