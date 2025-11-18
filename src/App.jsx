// import { useState } from 'react'

import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'

function App() {


  return (
    <>
      <body className='max-w-7xl min-h-screen mx-auto'>
        <Nav></Nav>
        <Banner></Banner>
        <Footer></Footer>
      </body>
    </>
  )
}

export default App
