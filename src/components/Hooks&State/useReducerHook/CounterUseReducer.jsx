import React, { useReducer, useState } from 'react'

// Define a Reducer function
function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'reset':
            return { ...state, count: 0, table: 2 };
        case 'table':
            return { ...state, table: state.table + 2 };
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
}
const CounterUseReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0, table: 2 });
    return (
        <div className='bg-white h-96 w-auto px-4 rounded-3xl flex justify-center flex-col items-center gap-10 font-bold text-2xl'>
            <div className='text-center'>
                <div className=''>Count: {state.count}</div>
                <div className=''>Table: {state.table}</div>
            </div>

            <div className='flex gap-5'>
                <button onClick={() => dispatch({ type: 'increment' })} className='bg-slate-200 rounded-2xl px-4 py-6 hover:bg-slate-400'>++</button>
                <button onClick={() => dispatch({ type: 'decrement' })} className='bg-slate-200 rounded-2xl px-5 py-6 hover:bg-slate-400'>--</button>
                <button onClick={() => dispatch({ type: 'reset' })} className='bg-slate-200 rounded-2xl px-5 py-6 hover:bg-slate-400'>Reset</button>
                <button onClick={() => dispatch({ type: 'table' })} className='bg-slate-200 rounded-2xl px-5 py-6 hover:bg-slate-400'>Print table</button>
            </div>
        </div>
    );
}

export default CounterUseReducer;
