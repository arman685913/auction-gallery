import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-16">
              <aside>
                <a className="text-2xl text-[#003EA4]">Auction <span className="font-bold text-[#FFD337]">Gallery</span></a>
                <div className='flex gap-2 text-xl'>
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
                <p className='md:text-lg'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
              </aside>
            </footer>
        </div>
    );
};

export default Footer;