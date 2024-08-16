import React from 'react'
import Card from './card'
import fruits from '../../assets/data'

const Display = () => {
    return (
        <div className='bg-red-100 '>
            <h1 className='text-center font-bold text-3xl my-4'>Props in React</h1>
            <li className='text-black pb-3 text-lg text-center'>Def :Props are the inputs to React components. They are passed into components as attributes and
                are used to pass data from parent components to child components.</li>
            <li className='text-black pb-3 text-lg text-center'> Immutable: Props are read-only and cannot be modified by the component that receives them.</li>
            <div className='flex justify-between flex-wrap'>
                {fruits.map((fruitName, index) => (
                    <Card key={index} fruit={fruitName} index={index} />
                ))}
            </div>
        </div>

    )
}

export default Display
