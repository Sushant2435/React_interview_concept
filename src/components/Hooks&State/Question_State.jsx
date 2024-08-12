import React from 'react'
import { FaArrowDown } from "react-icons/fa";

const Question_State = ({ ques, ans }) => {
    const [showAnswer, setShowAnswer] = React.useState(false);
    return (
        <div className='mx-10 bg-indigo-300 rounded-2xl p-5 my-5'>
            <div className='flex justify-between'>
                <h3 className='text-3xl font-sans font-semibold'>{ques}</h3>
                <div onClick={() => setShowAnswer(!showAnswer)} className={showAnswer ? 'rotate-180 cursor-pointer bg-white p-3  rounded-full' : 'p-3 rounded-full bg-white cursor-pointer'}><FaArrowDown /></div>
            </div>
            <div className={showAnswer ? "block" : "hidden"}>
                <hr className='my-5' />
                <p className='text-xl'>{ans}</p>
            </div>
        </div>
    )
}

export default Question_State
