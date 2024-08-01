import React from 'react'

import './App.css'
import Purecomponent1 from './components/purecomponent.js/Purecomponent'
import ParentComponent from './components/purecomponent.js/Purecomponent1'
import Stylecompnent from './components/stylecomponent/Stylecomponent'

function App() {

  return (
    <>
      <Purecomponent1 />
      <ParentComponent />
      <Stylecompnent />
    </>
  )
}

export default App
