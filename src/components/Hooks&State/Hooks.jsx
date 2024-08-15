// Hooks: Hooks are special functions that allow you to read and update values within a component.
import React from 'react'
import Counter from './useState/Counter_useState'
import UseState_checkbox from './useState/UseState_checkbox'
import Axios from '../Axios_fetch/Axios'
import Question_parent from './useState/Question_parent'

const Hooks = () => {
    return (
        <>

            <div className='flex flex-col items-center bg-gradient-to-br h-auto w-screen from-red-500 to-blue-500 p-10'>
                <h1 className='pb-10  text-2xl font-bold'>1. useState Hook</h1>
                <div className='flex flex-wrap gap-4'>
                    <Counter />
                    <UseState_checkbox />
                </div>
            </div>
            <div>
                <Question_parent />
            </div>

            <div className='flex flex-col bg-blue-100 '>
                <h1 className='text-3xl font-bold text-center py-2'>2. useEffect Hook with Axios and Fetch</h1>
                <div className='flex items-center justify-center'>
                    <Axios />
                </div>

            </div >
        </>
    )
}

export default Hooks
