import React from 'react';
import { FaHeart } from "react-icons/fa6";

const Mainpart = ({mainPart}) => {
    console.log(mainPart)
    return (
        <div>
            <table className="w-full">
            <tbody className="text-xs text-gray-700">
                
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="pl-2 py-4 align-middle w-[50px] h-[45px]">
                    <img className='w-[50px] h-[45px]' src={mainPart.image} alt="" />
              </td>
              <td className="pl-2 py-4 align-middle w-[180px]">
                  {mainPart.title}
              </td>

              <td className=" py-4 text-right align-middle">
                {mainPart.currentBidPrice} BDT
              </td>

              <td className="pr-8 py-4 text-right align-middle">
                {mainPart.timeLeft}
              </td>

              <td className="pr-6 py-4 text-right align-middle">
                <button><FaHeart /></button>
              </td>
            </tr>

            </tbody>
            </table>  
        </div>
    );
};

export default Mainpart;