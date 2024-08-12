import React from 'react'
import { questions } from '../../assets/data'
import Question_State from './Question_State'

const Question_parent = () => {
    return (
        <div className='bg-gray-300 py-10'>
            {questions.map((item, index) => (
                <Question_State key={index} ques={item.ques} ans={item.ans} />
            ))}

        </div>
    )
}

export default Question_parent
