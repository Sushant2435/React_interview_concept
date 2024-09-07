import React from 'react'

const Square = (props) => {

    return (
        <div onClick={props.onClick} className='w-[80px] h-[80px] bg-yellow-100 border border-gray-300 flex justify-center items-center cursor-pointer font-bold text-2xl'>{props.value}</div>
    )
}

export default Square
