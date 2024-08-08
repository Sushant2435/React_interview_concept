// Hooks: Hooks are special functions that allow you to read and update values within a component.
import React from 'react'
import Counter from './Counter_useState'
import UseState_checkbox from './UseState_checkbox'

const Hooks = () => {
    return (
        <div className='flex flex-col items-center bg-gradient-to-br h-auto w-screen from-red-500 to-blue-500 p-10'>
            <h1 className='pb-10  text-2xl font-bold'>1. useState Hooks</h1>
            <div className='flex flex-wrap gap-4'>
                <Counter />
                <UseState_checkbox />
            </div>
        </div>
    )
}

export default Hooks
