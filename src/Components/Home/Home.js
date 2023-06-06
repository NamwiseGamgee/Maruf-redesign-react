import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-32 pt-10 md:pt-[135px] pb-10 md:pb-[120px] justify-center items-center bg-[#00040e]'>
                <div>
                    <img className='w-[200px] h-[200px]  md:w-[444px] md:h-[444px] circle-img' src="images/maruf.png" alt="" />
                </div>

                <div className='text-center lg:text-left'>
                    <h2 className='text-xl md:mb-[11px] text-[#a5a5a5]'>Hi, this is</h2> <br />
                    <h2 className='text-xl md:text-5xl font-bold text-white md:mb-[18px]'>Abdullah Al Maruf</h2><br />
                    <p className='text-xl mb-[18px] text-[#a5a5a5]'>I'm a freelance Graphic and UI/UX designer based in Dhaka, <br /> Bangladesh. I specialized in creating outstanding visuals <br />that helps your brand to achieve business goals.</p>
                    <Link to='/contact' className='block mx-auto lg:mx-0 bg-[#ffb444] text-2xl py-3 px-11 w-fit font-semibold rounded-[48px]'>Contact</Link>
                </div>

            </div>
            <div className='bg-[#00040e] text-center md:pb-20'>
                <h2 className='text-4xl font-bold text-white mb-[11px]'>What I Do</h2>
                <hr className='mx-auto border-none w-[84px] bg-[#ffb444] h-1' />
            </div>
            <div className='bg-[#00040e] grid lg:flex items-center px-3 pt-10 gap-4 pb-10 md:px-[100px] md:gap-[110px] md:pb-[120px]'>
                <div className='lg:pl-12 lg:pb-6 lg:pt-[60px] lg:pr-20 px-4 py-2 rounded-xl bg-[#010818]'>
                    <div className='flex mb-5 lg:mb-10 gap-5 justify-center items-center'>
                        <img src="images/graphic-design.png" alt="" />
                        <h2 className='text-2xl font-semibold text-white'>Graphic Design</h2>
                    </div>
                    <p className='text-xl text-center lg:text-left text-[#a5a5a5]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='lg:pl-12 lg:pb-6 lg:pt-[60px] lg:pr-20 px-4 py-2 rounded-xl bg-[#010818]'>
                    <div className='flex mb-5 lg:mb-10 gap-5 justify-center items-center'>
                        <img src="images/ui-ux.png" alt="" />
                        <h2 className='text-2xl font-semibold text-white'>UI/UX Design</h2>
                    </div>
                    <p className='text-xl text-center lg:text-left text-[#a5a5a5]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div className='bg-[#00040e] text-center pb-20'>
                <h2 className='text-4xl font-bold text-white md:pt-10 mb-[11px]'>My Recent Works</h2>
                <hr className='mx-auto border-none w-[84px] bg-[#ffb444] h-1' />
            </div>
            <div className='flex flex-col md:flex-row gap-5 bg-[#00040e] items-center px-5 lg:px-[100px] justify-center pb-10 md:pb-[121px]'>
                <div><img src="images/work-1.png" alt="" /></div>
                <div><img src="images/work-2.png" alt="" /></div>
                <div><img src="images/work-3.png" alt="" /></div>
            </div>
            <div className='bg-[#00040e] text-center pb-20'>
                <h2 className='text-4xl font-bold text-white mb-[11px]'>Fun Facts</h2>
                <hr className='mx-auto border-none w-[84px] bg-[#ffb444] h-1' />
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-[100px] justify-around items-center bg-[#00040e] lg:pb-[120px] pb-10'>
                <div className='pt-[26px] text-center bg-[#010818] px-20 rounded-xl'>
                    <img className='flex mx-auto mb-5' src="images/clients.png" alt="" />
                    <h2 className='text-white font-bold text-xl'>Happy Clients</h2>
                    <h3 className='text-[32px] font-medium text-[#a5a5a5]'>15+</h3>
                </div>
                <div className='pt-[26px] text-center bg-[#010818] px-20 rounded-xl'>
                    <img className='flex mx-auto mb-5' src="images/clock.png" alt="" />
                    <h2 className='text-white font-bold text-xl'>Working Hours</h2>
                    <h3 className='text-[32px] font-medium text-[#a5a5a5]'>500+</h3>
                </div>
                <div className='pt-[26px] text-center bg-[#010818] px-20 rounded-xl'>
                    <img className='flex mx-auto mb-5' src="images/projects.png" alt="" />
                    <h2 className='text-white font-bold text-xl'>Projects Completed</h2>
                    <h3 className='text-[32px] font-medium text-[#a5a5a5]'>60+</h3>
                </div>
                <div className='pt-[26px] text-center bg-[#010818] px-20 rounded-xl'>
                    <img className='flex mx-auto mb-5' src="images/coffee.png" alt="" />
                    <h2 className='text-white font-bold text-xl'>Coffee Consumed</h2>
                    <h3 className='text-[32px] font-medium text-[#a5a5a5]'>1000+</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;