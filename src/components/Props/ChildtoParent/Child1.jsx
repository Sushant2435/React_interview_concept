import React from 'react'

const Child1 = ({ handleData }) => {
    function handleChange(e) {
        handleData(e.target.value);
    }
    return (
        <>
            <h1 className='text-red-400'>This is a child Component</h1>
            <input onChange={handleChange} type="text" className=' bg-gray-50 rounded-xl border border-gray-500 px-2 p-2' placeholder='Enter your input' />
        </>
    )
}

export default Child1
