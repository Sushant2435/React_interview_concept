import React from 'react'
import Card from './card'
import fruits from '../../assets/data'

const Display = () => {
    return (
        <>
            <h1 className='text-center font-bold text-2xl my-4'>Props in React</h1>
            <div className='flex justify-between flex-wrap'>
                {fruits.map((fruitName, index) => (
                    <Card key={index} fruit={fruitName} index={index} />
                ))}
            </div>
        </>

    )
}

export default Display
