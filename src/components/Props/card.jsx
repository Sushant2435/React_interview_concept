import React from 'react'
const Card = ({ fruit, index }) => {
    return (
        <div className='cursor-pointer h-80 w-80 gap-2 bg-orange-200 flex justify-center items-center m-4 rounded-2xl font-semibold text-xl hover:bg-orange-400'>
            <div>{index + 1}.</div>
            <div>{fruit.name}</div>
        </div>
    )
}

export default Card
