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
