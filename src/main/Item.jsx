import React from 'react';
import Mainpart from './Mainpart';

const Item = ({mainPart ,removeBtn }) => {
    return (
        <div id={`itemId${mainPart.id}`} className='hidden'>
            <div className=' border my-2 flex md:gap-3 flex-row'>
                <div className='img-small md:w-[100px] md:h-[90px] w-[70px] h-[55px] overflow-hidden rounded flex-shrink-0'>
                  <img
                    className='w-full h-full object-cover'
                    src={mainPart.image}
                    alt=""
                  />
                </div>
                <div className='flex flex-col'>
                    <div className='md:flex items-baseline justify-around'>
                        <p className='md:block hidden '>{mainPart.title}</p>
                        <div className='mx-auto'>
                            <button onClick={() => removeBtn(mainPart)} className='m-0.5 px-1 text-xl rounded-4xl hover:cursor-pointer hover:dark:bg-yellow-100 hover:dark:text-black hover:text-white hover:bg-red-800 font-bold'>x</button>
                        </div>
                    </div>
                    <div className='hidden md:flex md:gap-5 gap2.5 flex-row '>
                    <p>${mainPart.currentBidPrice}</p>
                    <p>Bids: {mainPart.bidsCount}</p>
                </div>
            </div> 
            </div>
                <div className='md:hidden gap-2 text-sm text-center flex'>
                    <p>${mainPart.currentBidPrice}</p>
                    <p>Bids: {mainPart.bidsCount}</p>
                </div>
        </div>
    );
};

export default Item;