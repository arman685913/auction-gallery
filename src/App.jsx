// import { useState } from 'react'
import { useEffect, useState } from "react";

import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import Cart from './main/Cart'
import MainParts from './main/MainParts'

function App() {
  const [mainParts , setMainParts] = useState([])
  useEffect(()=> {
      fetch('data.json').then(res => res.json()).then(data=>setMainParts(data))
  },[]);

  return (
    <>
      <body className='max-w-7xl min-h-screen mx-auto'>
        <Nav></Nav>
        <Banner></Banner>
        <div
        className='bg-blue-50 px-20 py-24'>
        <h1 className='text-3xl font-semibold mb-2'>Active Auctions</h1>
        <p className='text-lg mb-4'>Discover and bid on extraordinary items</p>
          <div className="flex gap-5">

          <div className="w-[70%]  bg-white rounded-2xl p-2">
          <table className="w-full">     
            
            <thead className="text-xs text-gray-700">
              <tr className="border-b border-gray-200">
                <th colSpan={3} className="pl-4 py-3 text-left align-middle">Items</th>
                <th className="pl-28 py-3 text-right align-middle">Current Bid</th>
                <th className="py-3 text-right align-middle">Time Left</th>
                <th className="pr-2 py-3 text-right align-middle">Bid Now</th>
              </tr>
            </thead>

        </table>
                <MainParts mainParts={mainParts}></MainParts>
            </div>
            <div className="w-[30%] bg-white rounded-3xl">
                <Cart></Cart>
            </div>
          </div>
          </div>
        <Footer></Footer>
      </body>
    </>
  )
}

export default App
