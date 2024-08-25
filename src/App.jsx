import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FunctionComponent, Navbar, About, AboutReact, ALLCrud, Footer, Home, Description, InterviewCom, Redux, Hooks, LoginForm } from './pages/ApplicationRoute'

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
