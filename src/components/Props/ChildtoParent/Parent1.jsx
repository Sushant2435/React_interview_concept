import React, { useState } from 'react'
import Child1 from './Child1'

const Parent1 = () => {
    const [data, setData] = useState('')
    const handleData = (data) => {
        setData(data)
    }
    return (
        <div className='text-center bg-gray-300 py-4'>
            <h1 className='text-black font-bold text-3xl'>How to pass data from child to parent</h1>
            <Child1 handleData={handleData} />
            <p className='pt-2 tex-lg'>Data access in parent:{data}</p>
        </div>
    )
}

export default Parent1
