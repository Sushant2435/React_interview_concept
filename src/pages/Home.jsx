import React from 'react'
import Display from '../components/Props/display'
import Question_parent from '../components/Hooks&State/useState/Question_parent'

const Home = () => {
    return (
        <div>
            <Display />
            <div className='bg-gray-300'>
                <h1 className=' text-2xl font-bold text-center pt-6'>Shorthand Interview Question</h1>
                <Question_parent />
            </div>
        </div>
    )
}

export default Home
