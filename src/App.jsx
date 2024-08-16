import React from 'react'
import Purecomponent1 from './components/purecomponent.js/Purecomponent'
import ParentComponent from './components/purecomponent.js/Purecomponent1'
import Stylecompnent from './components/stylecomponent/Stylecomponent'
import FunctionComponent from './components/componentTypes/FunctionCompnent'
import Form from './components/CURD/Form'
import Display from './components/Props/display'
import Hooks from './components/Hooks&State/Hooks'
import Todo from './components/Redux/Todo'
function App() {
  return (
    <div className='overflow-hidden'>
      <Display />
      <h1 className='text-2xl text-center font-bold my-4'>Hooks in React</h1>
      <Hooks />
      <Form />
      <div className='bg-blue-100 h-auto w-full py-10'>
        <div className='text-center'>
          <h1 className='text-2xl'>Definition</h1>
          <li className='text-black text-lg text-center'> Redux is a state management library often used with React for managing global application
            state in a predictable way.</li>
          <li className='text-black text-lg text-center'>Store: one common place of our application for state it is responsible for store whatever state to be stored for our Application, like userinformation etc</li>

          <li className='text-black text-lg text-center py-2'>Reducer:responsible for directely manipulating and changing the state of our application it is basically a function that take current state and action as arguments and return new state result</li>

          <li className='text-black text-lg text-center py-2'>Action: action has an event that describe something that happend in the application in other words Action takes the reducer what to do and how manipulate the state</li>

          <li className='text-black text-lg text-center py-2'>Middelware:Extensions to Redux that handle side effects like async actions.</li>
        </div>
        <Todo />
      </div>
      <Purecomponent1 />
      <ParentComponent />
      <Stylecompnent />
      <FunctionComponent />
    </div>
  )
}

export default App
