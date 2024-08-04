import React from 'react'
import Purecomponent1 from './components/purecomponent.js/Purecomponent'
import ParentComponent from './components/purecomponent.js/Purecomponent1'
import Stylecompnent from './components/stylecomponent/Stylecomponent'
import FunctionComponent from './components/componentTypes/FunctionCompnent'
import ClassComponent from './components/componentTypes/ClassComponent'
import Form from './components/CURD/Form'

function App() {

  return (
    <>
      <Purecomponent1 />
      <ParentComponent />
      <Stylecompnent />
      <FunctionComponent />
      <ClassComponent />
      <Form />
    </>
  )
}

export default App
