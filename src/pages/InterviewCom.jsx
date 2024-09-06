import React from 'react'
import Parent1 from '../components/Props/ChildtoParent/Parent1'
import Purecomponent1 from '../components/purecomponent.js/Purecomponent'
import ParentComponent from '../components/purecomponent.js/Purecomponent1'
import Question_parent from '../components/Hooks&State/useState/Question_parent'
import Stylecompnent from '../components/stylecomponent/Stylecomponent'
import Main from '../components/lifecycleMethod/Main'

const InterviewCom = () => {
    return (
        <div>
            <Question_parent />
            <Parent1 />
            <Purecomponent1 />
            <ParentComponent />
            <Stylecompnent />
            <Main />

        </div>
    )
}

export default InterviewCom
