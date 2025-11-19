import React from 'react';
import bg from '../../assets/Banner-min.jpg';

const Banner = ({scrollToSection}) => {

  return (
    <div
      className="md:h-[550px] h-[250px] w-full md:bg-contain bg-cover bg-center flex items-center  "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='justify-self-start md:px-20 p-6'>     
        <h1 className='text-white md:text-5xl font-bold'>Bid on Unique Items from <br />Around the World</h1>
        <p className='text-gray-300 bg-black/25 w-[70%] md:my-5 my-2 leading-none md:text-xl text-sm'>Discover rare collectibles, luxury goods, and <br className='hidden md:block'/> vintage treasures in our curated auctions </p>
        <button onClick={() => scrollToSection()} className='btn dark:border-gray-600 border rounded-full mt-2 md:p-6  md:text-lg'>Explore Auctions</button>
        </div>
    </div>
  );
};

export default Banner;
