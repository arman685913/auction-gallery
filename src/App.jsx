import { useEffect, useRef, useState } from "react";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
//toast
const notify = () => toast(<div className="flex items-center gap-3">
        <img className="w-[20px] h-[20px]" src="https://as2.ftcdn.net/v2/jpg/00/88/59/17/1000_F_88591703_XcsbAg9gpqccIGJI4C52FJr42saKzZVN.jpg" alt="icon" />
        <span className="text-lg">Item Added to Your Favorite List</span>
      </div>)

const handleHeartBtn = (mainPart) => {
  //btnToggle
  const heartBtn = document.getElementById(`heartBtn${mainPart.id}`)
  heartBtn.setAttribute('disabled',true);
  const heartSvg = document.getElementById(`heartSvg${mainPart.id}`)
  heartSvg.setAttribute('fill','red');
  //toast
  notify()

}

// scroll

 const notify2 = () => toast("Explore Auctions ")
  const sectionRef = useRef();

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    notify2()
  };

  return (
    <>
      <main className='max-w-7xl min-h-screen mx-auto'>
        <Nav></Nav>
        <Banner scrollToSection={scrollToSection}></Banner>
        <div ref={sectionRef} 
        className='bg-blue-50 md:px-20 md:py-24 px-4 py-8'>
        <h1 className='text-3xl font-semibold mb-2'>Active Auctions</h1>
        <p className='text-lg mb-4'>Discover and bid on extraordinary items</p>
          <div className="flex md:gap-5 gap-2.5">

          <div  className="w-[70%] text-sm md:text-lg bg-white rounded-2xl p-2">
          <table className="w-full">     
            <thead className="text-gray-700">
              <tr className="border-b border-gray-200">
                <th colSpan={2} className="md:w-[220px] md:pl-6 pl-3 py-3 text-left align-middle">Items</th>
                <th className="py-3 md:w-[190px] align-middle ">
                  <div className="md:block hidden">
                    Current Bid
                  </div>
                </th>
                <th className="py-3 align-middle pl-5 md:pl-0">Time Left</th>
                <th className="md:pr-6 py-3 align-middle">Bid Now</th>
              </tr>
            </thead>

        </table>
                <MainParts handleHeartBtn={handleHeartBtn} mainParts={mainParts} ></MainParts>
            </div>
            <div className="w-[30%] bg-white rounded-3xl">
                <Cart></Cart>
            </div>
          </div>
          </div>
        <Footer></Footer>
      </main>
      <ToastContainer />
    </>
  )
}

export default App
