import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FunctionComponent from './components/componentTypes/FunctionCompnent'
import Navbar from './components/rounting/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import ALLCrud from './pages/ALLCrud'
import Footer from './pages/Footer'
import Description from './pages/Description'
import Hooks from './pages/Hooks'
import InterviewCom from './pages/InterviewCom'
import Redux from './pages/Redux'
import AboutReact from './pages/About-react'
import LoginForm from './components/FormValidation/LoginForm'
function App() {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-react" element={<AboutReact />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/crud-operation" element={<ALLCrud />} />
          <Route path="/interview-concept" element={<InterviewCom />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/product/:id" element={<Description />} />
          <Route path="/Components" element={<FunctionComponent />} />
          <Route path="/form" element={<LoginForm />} />
        </Routes>

        <Footer />
      </BrowserRouter>


    </div >
  )
}

export default App
