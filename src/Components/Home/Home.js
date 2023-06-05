import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='flex gap-32 pt-[135px] pb-[160px] justify-center items-center bg-[#00040e]'>
            <div>
                <img className='w-[444px] h-[444px] circle-img' src="images/maruf.png" alt="" />
            </div>
            <div>
                <div>
                    <h2 className='text-xl mb-[11px] text-[#a5a5a5]'>Hi, this is</h2> <br />
                    <h2 className='text-5xl font-bold text-white mb-[18px]'>Abdullah Al Maruf</h2><br />
                    <p className='text-xl mb-[18px] text-[#a5a5a5]'>I'm a freelance Graphic and UI/UX designer based in Dhaka, <br /> Bangladesh. I specialized in creating outstanding visuals <br />that helps your brand to achieve business goals.</p>
                    <button className='block bg-[#ffb444] text-2xl py-3 px-11 font-semibold rounded-[48px]'>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Home;