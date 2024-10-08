import React from 'react'

import { useDispatch } from 'react-redux'
import { login } from '../app_redux/fetures/auth/authslice'


const Login = () => {
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const Formdata = Object.fromEntries(formData.entries());
        dispatch(login(Formdata))
    }
    return (
        <div>
            <div>
                <h2 className='text-center text-3xl '>Login</h2>
            </div>
            <form onSubmit={handleSubmit} className='bg-indigo-50 w-[350px] mx-auto mt-10 flex flex-col gap-5 px-5 py-16 rounded-2xl'>
                <fieldset>
                    <label htmlFor="username">UserName: </label>
                    <input type="text" name="username" id="username" />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" />
                </fieldset>
                <button className='p-2 bg-green-400 rounded-lg' type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
