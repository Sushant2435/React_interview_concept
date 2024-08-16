// Hooks: Hooks are special functions that allow you to read and update values within a component.
import React from 'react'
import Counter from './useState/Counter_useState'
import UseState_checkbox from './useState/UseState_checkbox'
import Axios from '../Axios_fetch/Axios'
import Question_parent from './useState/Question_parent'
import TitleIncrement from './useEffect/TitleIncrement'
import CounterUseReducer from './useReducerHook/CounterUseReducer'
const Hooks = () => {
    return (
        <>
            <div className='flex flex-col items-center bg-gradient-to-br h-auto w-screen from-red-500 to-blue-500 p-10'>
                <li className='text-red-200 text-lg'>Allows you to add state to functional
                    components. </li>
                <li className='text-red-200 pb-3 text-lg'>It returns a stateful value and a function to
                    update it.
                </li>
                <h1 className='pb-10  text-2xl font-bold'>1. useState Hook</h1>
                <div className='flex flex-wrap gap-4'>
                    <Counter />
                    <UseState_checkbox />
                </div>
                <h1 className='pt-10 pb-3  text-2xl font-bold'>2.1 useEffect Hook</h1>
                <li className='text-red-200 text-lg'>Allows you to perform side effects in
                    functional components, such as data
                    fetching, subscriptions, or manually
                    changing the DOM.</li>
                <li className='text-red-200 pb-3 text-lg'>It takes a function that contains the effect, and
                    optionally, a dependency array to control
                    when the effect runs.</li>
                <div className='flex flex-wrap gap-4'>
                    <TitleIncrement />
                </div>
                <h1 className='pt-10 pb-3  text-2xl font-bold'>3.1 useReducer Hook</h1>
                <li className='text-red-200 text-lg'>A more powerful alternative to useState
                    for managing complex state logic
                    in components. </li>
                <li className='text-red-200 pb-3 text-lg'>It works similarly to Redux, with a reducer
                    function that dictates how the state should
                    change in response to actions.</li>
                <div className='flex flex-wrap gap-4'>
                    <CounterUseReducer />
                </div>
            </div>
            <div className='bg-gray-300'>
                <h1 className=' text-2xl font-bold text-center pt-6'>2.2 useState Hook</h1>
                <Question_parent />
            </div>
            <div className='flex flex-col bg-blue-100 '>
                <h1 className='text-3xl font-bold text-center py-2'>2.2 useEffect Hook with Axios and Fetch</h1>
                <li className='text-black text-lg text-center'>Fetch and Axios both are promise based based https client</li>
                <li className='text-black text-lg text-center'>fetch is inbuilt webapi method present in most of the modern browsers where as axios is a third party library is built on top of XMLHttpRequest object.</li>
                <li className='text-black text-lg text-center'> axios performs automatic parsing of response data where as in fetch we need to manually parse the response data(eg: response.json()).</li>
                <li className='text-black text-lg text-center'>axios supports interceptors by using which we can modify the request or response before they are sent/received from the server.</li>
                <li className='text-black pb-3 text-lg text-center'>axios prevents csrf (cross site request forgery)attacks.</li>
                <div className='flex items-center justify-center'>
                    <Axios />
                </div>
            </div>
        </>
    )
}

export default Hooks
