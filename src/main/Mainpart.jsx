import React from 'react';
// import { FaHeart } from "react-icons/fa6";

const Mainpart = ({mainPart ,handleHeartBtn}) => {
    // console.log(mainPart)
    return (
        <div>
            <table className="w-full">
            <tbody className="text-gray-700 dark:text-gray-300">
                
            <tr className="border-b border-gray-200 dark:hover:bg-gray-600">
              <td className="md:pl-4 pl-2 py-4 md:w-[82px] md:h-[70px]">
                    <div className=''>
                      <img className='md:w-[82px] md:h-[70px] w-[60px] h-[50px]' src={mainPart.image} alt="" />
                    <p className='md:hidden text-sm'>{mainPart.currentBidPrice} BDT</p>
                    </div>
              </td>
              <td className="hidden align-middle md:block pl-4 py-4 md:w-[260px]">
                  <div className='py-4 font-semibold  items-center'>{mainPart.title}</div>
              </td>

              <td className=" md:pr-16 py-4 ">
                <div className='hidden md:block '>
                {mainPart.currentBidPrice} BDT
                </div>
              </td>

              <td className="py-4 md:pr-16 text-xs md:text-base">
                {mainPart.timeLeft}
              </td>

              <td className="md:pr-12 pr-4 py-4 text-center align-middle">
              <button onClick={() => handleHeartBtn(mainPart)} id={`heartBtn${mainPart.id}`} className='cursor-pointer disabled:cursor-not-allowed' ><svg id={`heartSvg${mainPart.id}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              </button>
              </td>
            </tr>

            </tbody>
            </table>  
        </div>
    );
};

export default Mainpart;