import React from 'react';

const Cart = () => {
    return (
        <div>
            <div className='flex items-center justify-center md:py-8 py-4 border-b border-gray-200 gap-1'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-9 size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <h1 className='md:text-4xl font-medium'><span className='hidden md:inline'>Favorite</span> Items</h1>
            </div>
            <div className=' md:py-12 py-6 text-center border-b border-gray-200 gap-2.5'>
                <h1 className='md:text-3xl font-medium italic text-sm'>No favorites yet</h1>
                <p className='text-gray-500 md:px-4 px-1 italic md:pt-6 pt-3 md:text-xl text-xs'>Click the heart icon on any item to add it to your favorites</p>
            </div>
            <div className='md:px-4 flex items-center md:py-8 py-4 flex-col md:flex-row justify-between md:text-left text-center'>
                <h1 className='md:text-3xl text-sm'>Total bids Amount :</h1>
                <h1 className='md:text-3xl italic text-sm'>$0000</h1>
            </div>
        </div>
    );
};

export default Cart;