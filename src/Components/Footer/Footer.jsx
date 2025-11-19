import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content md:p-16 p-12">
              <aside>
                <a className="text-xl md:text-2xl text-[#003EA4]">Auction <span className="font-bold text-[#FFD337]">Gallery</span></a>
                <div className='flex gap-2 md:text-xl text-lg'>
                    <p>Bid.</p>
                    <p>Win.</p>
                    <p>Own.</p>
                </div>
                <div className='md:flex gap-2 hidden '>
                    <ul className="menu menu-horizontal px-1">
                      <li><a>Home</a></li>
                      <li><a>Auctions</a></li>
                      <li><a>Categories</a></li>
                      <li><a>How to works</a></li>
                    </ul>
                </div>
                <p className='md:text-lg text-sm italic'>Copyright © {new Date().getFullYear()} - All right reserved by <br className='md:hidden' />  <span className='strong text-gray-900 dark:text-yellow-400 font-semibold'>Auction Gallery.</span></p>
              </aside>
            </footer>
        </div>
    );
};

export default Footer;