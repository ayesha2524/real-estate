import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import MainStack from './navigation/MainStack'
function App() {
   const Main = true

  return (
    <>
      <BrowserRouter>
       {
        Main ? (
          <>
          <Header />
          <MainStack />
          <Footer />
          </>
        ): ""
       }

      </BrowserRouter>
    </>
  )
}

export default App
