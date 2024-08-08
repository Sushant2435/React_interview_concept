import React from 'react'
import Purecomponent1 from './components/purecomponent.js/Purecomponent'
import ParentComponent from './components/purecomponent.js/Purecomponent1'
import Stylecompnent from './components/stylecomponent/Stylecomponent'
import FunctionComponent from './components/componentTypes/FunctionCompnent'
import Form from './components/CURD/Form'
import Display from './components/Props/display'

function App() {

  return (
    <>
      <Purecomponent1 />
      <ParentComponent />
      <Stylecompnent />
      <FunctionComponent />

      <Form />
      <Display />
    </>
  )
}

export default App
