import React from 'react'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Navbar from './Pages/Navbar'
import Process from './Pages/Process'
import Testimony from './Pages/Testimony'
import "./style/main.css"

function App() {
    return (
        <>
               <Navbar/>  
               <About/>
               <Process/>
               <Testimony/>
               <Contact/>
               <Footer/>
        </>
    )
}

export default App
