import React from 'react'
import Form from '../components/CURD/Form'
import Todo1 from '../components/todo/Todo1'
import Todo from '../components/Redux/Todo'

const ALLCrud = () => {
    return (
        <>
            <div className='bg-red-100 h-auto w-full py-10'>
                <div className='text-center'>
                    <h1 className='text-2xl'>Definition</h1>
                    <li className='text-black text-lg text-center'> Redux is a state management library often used with React for managing global application
                        state in a predictable way.</li>
                    <li className='text-black text-lg text-center'>Store: one common place of our application for state it is responsible for store whatever state to be stored for our Application, like userinformation etc</li>

                    <li className='text-black text-lg text-center py-2'>Reducer:responsible for directely manipulating and changing the state of our application it is basically a function that take current state and action as arguments and return new state result</li>

                    <li className='text-black text-lg text-center py-2'>Action: action has an event that describe something that happend in the application in other words Action takes the reducer what to do and how manipulate the state</li>

                    <li className='text-black text-lg text-center py-2'>Middelware:Extensions to Redux that handle side effects like async actions.</li>
                </div>
                <Todo />
            </div>
            <Form />

            <Todo1 />
        </>
    )
}

export default ALLCrud
