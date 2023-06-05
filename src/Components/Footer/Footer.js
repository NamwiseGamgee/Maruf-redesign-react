import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='py-6 px-[100px] bg-[#010818] flex justify-between items-center'>
            <div className='text-sm text-[#a5a5a5] flex gap-12'>
                <div>
                    <a href="https://www.linkedin.com/in/maruf1" target='blank'>LinkedIn</a>
                </div>
                <div>
                    <a href="https://www.facebook.com/abdullahal.maruf.319" target='blank'>Facebook</a>
                </div>
                <div>
                    <a href="https://www.instagram.com/_.abdullah_al_maruf._/" target='blank'>Instagram</a>
                </div>
                <div>
                    <a href="https://www.behance.net/abdullahalmaruf1" target='blank'>Behence</a>
                </div>
            </div>
            <div>
                <p className='text-sm text-[#a5a5a5]'>Copyright © 2023 • Abdullah Al Maruf • All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;