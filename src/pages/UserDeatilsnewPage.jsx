import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import hooks from react-redux
import { setuserInfo } from '../app_redux/fetures/userform/userFormSlice';

const UserDeatilsnewPage = () => {
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const Formdata = Object.fromEntries(formData.entries());
        dispatch(setuserInfo(Formdata));
    };
    const user = useSelector((state) => state.user.userInfo)
    console.log(user)


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
            <div className='text-center bg-blue-300 flex flex-col m-auto w-1/4 my-10 rounded-2xl'>
                <h2 className='font-bold text-2xl'>User details</h2>
                <p>UserName : {user.username}</p>
                <p>Password : {user.password}</p>
            </div>
        </div>
    );
};

export default UserDeatilsnewPage;
