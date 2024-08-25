import React, { useState } from 'react'

const LoginForm = () => {
    const [formdata, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value })
    }
    // useEffect(() => {
    //     console.log(formErrors)
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(formdata);
    //     }
    // }, [formErrors])
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(formdata))
        setSubmit(true);

    }
    const validateForm = (values) => {
        const errors = {}
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format"
        }
        if (!values.password) {
            errors.password = "password is required!";
        } else if (values.password.length < 4) {
            errors.password = "password must be more than 4 characters"
        } else if (values.password.length > 10) {
            errors.password = "password must be less than 10 characters"
        }
        return errors;
    }


    return (
        <div className='flex flex-col h-screen items-center justify-center'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className='bg-gray-200 text-black font-bold mb-2 rounded-2xl p-2'>Login Successfully</div>
            ) : (
                <div className='bg-red-200 text-black font-bold mb-2 rounded-2xl p-2'><pre>{JSON.stringify(formdata, null, 2)}</pre></div>
            )}

            <div className='h-auto w-1/3 bg-yellow-100 px-10 py-10 rounded-3xl shadow-xl'>
                <h1 className='font-bold text-3xl pb-5 text-center'>Login Form</h1>
                <form action="" className='flex flex-col gap-2' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor="username" className='font-bold'>User Name</label>
                        <input type="text" name="username" placeholder='User Name' value={formdata.username} onChange={handleChange} className=" rounded-xl p-2" />
                        <p className='text-red-500'>{formErrors.username}</p>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input type="email" name="email" placeholder='Enter Your email' value={formdata.email} onChange={handleChange} className='rounded-xl p-2' />
                        <p className='text-red-500'>{formErrors.email}</p>

                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password" className='font-bold'>Password</label>
                        <input type="password" name="password" placeholder='Enter PassWord' value={formdata.password} onChange={handleChange} className='rounded-xl p-2' />
                        <p className='text-red-500'>{formErrors.password}</p>
                    </div>
                    <button type='submit' className='bg-green-500 w-1/3 m-auto font-bold rounded-xl p-2 text-lg'>Submit</button>
                </form>
            </div>
        </div >

    )
}

export default LoginForm
