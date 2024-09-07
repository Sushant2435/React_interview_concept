import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FunctionComponent, Navbar, About, AboutReact, ALLCrud, Footer, Home, Description, InterviewCom, Redux, Hooks, LoginForm } from './pages/ApplicationRoute'
import Login from './pages/Login'
import UserDeatilsnewPage from './pages/UserDeatilsnewPage'
import Tic_tac_toe from './pages/tic_tac_tow/Tic_toc_toe'

function App() {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-react" element={<AboutReact />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/crud-operation" element={<ALLCrud />} />
          <Route path="/interview-concept" element={<InterviewCom />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/product/:id" element={<Description />} />
          <Route path="/Components" element={<FunctionComponent />} />
          <Route path="/form" element={<LoginForm />} />
          <Route path="/tic-tac-game" element={<Tic_tac_toe />} />
          <Route path="/userform" element={<UserDeatilsnewPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div >
  )
}

export default App
