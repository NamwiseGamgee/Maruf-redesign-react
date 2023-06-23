import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='py-6 px-[20px] md:px-[100px] bg-[#010818] flex flex-col lg:flex-row text-center gap-5 md:justify-between items-center'>
            <div className='text-sm text-[#a5a5a5] flex gap-5 md:gap-12'>
                <div>
                    <a className='makeWhite' href="https://www.linkedin.com/in/maruf1" target='blank'>LinkedIn</a>
                </div>
                <div>
                    <a className='makeWhite' href="https://www.facebook.com/abdullahal.maruf.319" target='blank'>Facebook</a>
                </div>
                <div>
                    <a className='makeWhite' href="https://www.instagram.com/_.abdullah_al_maruf._/" target='blank'>Instagram</a>
                </div>
                <div>
                    <a className='makeWhite' href="https://www.behance.net/abdullahalmaruf1" target='blank'>Behance</a>
                </div>
            </div>
            <div>
                <p className='text-sm text-[#a5a5a5]'>Copyright © 2023 • Abdullah Al Maruf • All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;