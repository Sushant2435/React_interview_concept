import React, { useReducer } from 'react'

// define a Reducer function

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return { count: 0 }
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
}


const CounterUseReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 })
    console.log(state)
    return (
        <div className='bg-white h-96 w-96 rounded-3xl flex justify-center flex-col items-center gap-20 font-bold text-2xl'>
            <div className=''> Count: {state.count}</div>
            <div className='flex gap-5 '>
                <button onClick={() => dispatch({ type: 'increment' })} className='bg-slate-200 rounded-2xl px-4 py-6 hover:bg-slate-400'>++</button>
                <button onClick={() => dispatch({ type: 'decrement' })} className='bg-slate-200 rounded-2xl px-5 py-6 hover:bg-slate-400'>--</button>
                <button onClick={() => dispatch({ type: 'reset' })} className='bg-slate-200 rounded-2xl px-5 py-6 hover:bg-slate-400'>Reset</button>
            </div>
        </div>
    )
}

export default CounterUseReducer
