import React, { useState } from 'react'
import axios from 'axios';

const Axios = () => {
    const [response, setResponse] = useState(false)
    axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            console.log(res.data)
            setResponse(res.data)
        }).catch((err) => {
            console.log(err)
        })
    return (
        <div className='h-screen flex items-center bg-yellow-100'>
            {!response ? (
                <div className='text-lg font-bold animate-bounce bg-red-400 rounded-xl my-5 w-[10%] text-center py-3 m-auto [animation-duration:0.5s]'>Loading....</div>
            )
                : (
                    <div className='text-lg font-bold animate-spin bg-blue-400 rounded-xl my-5 w-[20%] text-center py-3 m-auto [animation-duration:0.5s]'>Data successfully fetched....</div>
                )
            }
        </div>
    )
}

export default Axios
