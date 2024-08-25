import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required!'),
    email: Yup.string().email('Invalid email format').required('Email is required!'),
    password: Yup.string()
        .required('Password is required!')
        .min(4, 'Password must be at least 4 characters')
        .max(10, 'Password must be at most 10 characters'),
});
const Form1 = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
        console.log('Form data submitted:', data);
        // You can make an API call here or handle successful form submission
        reset(); // Reset the form fields after successful submission
    };

    return (
        <div className='flex flex-col h-screen items-center justify-center'>
            {Object.keys(errors).length === 0 && !Object.keys(errors).length ? (
                <div className='bg-gray-200 text-black font-bold mb-2 rounded-2xl p-2'>Login Successfully</div>
            ) : (
                <div className='bg-red-200 text-black font-bold mb-2 rounded-2xl p-2'>
                    <pre>{JSON.stringify(errors, null, 2)}</pre>
                </div>
            )}

            <div className='h-auto w-1/3 bg-yellow-100 px-10 py-10 rounded-3xl shadow-xl'>
                <h1 className='font-bold text-3xl pb-5 text-center'>Login Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                    <div className='flex flex-col'>
                        <label htmlFor="username" className='font-bold'>User Name</label>
                        <input
                            id="username"
                            type="text"
                            {...register('username')}
                            placeholder='User Name'
                            className="rounded-xl p-2"
                        />
                        <p className='text-red-500'>{errors.username?.message}</p>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input
                            id="email"
                            type="email"
                            {...register('email')}
                            placeholder='Enter Your email'
                            className='rounded-xl p-2'
                        />
                        <p className='text-red-500'>{errors.email?.message}</p>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password" className='font-bold'>Password</label>
                        <input
                            id="password"
                            type="password"
                            {...register('password')}
                            placeholder='Enter Password'
                            className='rounded-xl p-2'
                        />
                        <p className='text-red-500'>{errors.password?.message}</p>
                    </div>
                    <button type='submit' className='bg-green-500 w-1/3 m-auto font-bold rounded-xl p-2 text-lg'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Form1;
