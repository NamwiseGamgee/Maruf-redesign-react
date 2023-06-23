import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 lg:gap-32 pt-10 md:pt-[135px] pb-20 md:pb-[120px] justify-center items-center bg-[#00040e]'>

                <img className='w-[200px] h-[200px] flex justify-self-center  lg:justify-self-end border-[20px] border-[#010818] md:w-[444px] md:h-[444px] circle-img' src="images/maruf.png" alt="" />


                <div className='text-center lg:text-left'>
                    <h2 className='text-xl text-[#a5a5a5]'>Hi, this is</h2> <br />
                    <h2 className='text-3xl md:text-5xl font-bold text-white md:mb-[10px]'>Abdullah Al Maruf</h2><br />
                    <p className='mb-[18px] p-2 sm:p-0 lg:w-[480px] text-[#a5a5a5]'>I am a freelance Graphic and Motion designer located in Dhaka, Bangladesh. My expertise lies in producing exceptional visuals that assist your brand in attaining its business objectives.</p>
                    <Link to='/contact' className='block mx-auto lg:mx-0 bg-[#ffb444] text-2xl py-3 px-11 w-fit font-semibold rounded-[48px]'>Contact</Link>
                </div>

            </div>
            <div className='bg-[#00040e] text-center'>
                <h2 className='text-4xl font-bold text-white mb-[11px]'>What I Do</h2>
                <hr className='mx-auto border-none w-[84px] bg-[#ffb444] h-1' />
            </div>
            <div className='bg-[#00040e] grid lg:flex items-center px-3 pt-10 gap-4 pb-20 md:px-[100px] md:gap-[110px] md:pb-[120px]'>
                <div className='lg:pl-12 lg:pb-6 lg:py-[28px] lg:pr-20 px-4 py-4 rounded-xl bg-[#010818] mb-8 sm:mb-0'>
                    <div className='flex mb-5 lg:mb-10 gap-5 justify-center lg:justify-start items-center'>
                        <img src="images/graphic-design.png" alt="" />
                        <h2 className='text-2xl font-semibold text-white'>Graphic Design</h2>
                    </div>
                    <p className='text-center lg:text-left text-[#a5a5a5]'>Within the realm of graphic design, my area of expertise lies in brand identity design. Brand identity design plays a pivotal role in transforming a business into a recognizable brand. It facilitates effective communication with the target audience and maximizes the profitability of the business's products or services. I derive immense satisfaction from working in this specialized field, as witnessing a business achieve its desired outcomes through my designs brings me great joy.</p>
                </div>
                <div className='lg:pl-12 lg:pb-6 lg:py-[28px] lg:pr-20 px-4 py-4 rounded-xl bg-[#010818]'>
                    <div className='flex mb-5 lg:mb-10 gap-5 py-2 justify-center lg:justify-start items-center'>
                        <img src="images/ui-ux.png" alt="" />
                        <h2 className='text-2xl font-semibold text-white'>Motion Design</h2>
                    </div>
                    <p className='text-center lg:text-left text-[#a5a5a5]'>As a motion graphic designer, my primary focus is on animating logos. Additionally, I possess extensive hands-on experience in creating explainer videos, promotional videos, slideshows, and motion poster designs tailored for social media platforms. Motion graphics breathe life into designs, and I find this particular facet of design immensely thrilling and conducive to enhancing my creativity.</p>
                </div>
            </div>
            <div className='bg-[#00040e] text-center pb-10'>
                <h2 className='text-4xl font-bold text-white md:pt-10 mb-[11px]'>My Recent Works</h2>
                <hr className='mx-auto border-none w-[84px] bg-[#ffb444] h-1' />
            </div>
            <div className='flex flex-col md:flex-row gap-5 bg-[#00040e] items-center px-5 lg:px-[100px] justify-center pb-20 md:pb-[121px]'>
                <a className='onHover' href='https://www.behance.net/gallery/173714289/Brand-Identity-Design-MOUNTCALL' target='blank'>
                    <img className='rounded-xl' src="images/work-1.png" alt="" />
                </a>
                <a className='onHover' href='https://www.behance.net/gallery/117982821/Logo-Design-Volatile' target='blank'>
                    <img className='rounded-xl' src="images/work-2.png" alt="" />
                </a>
                <a className='onHover' href='https://www.behance.net/gallery/170748873/Brand-Identity-Design-PIXXWEB' target='blank'>
                    <img className='rounded-xl' src="images/work-3.png" alt="" />
                </a>
            </div>
            <div className='bg-[#00040e] text-center pb-10'>
                <h2 className='text-4xl font-bold text-white mb-[11px]'>Fun Facts</h2>
                <hr className='mx-auto border-none w-[84px] bg-[#ffb444] h-1' />
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-[100px] justify-around items-center bg-[#00040e] lg:pb-[120px] pb-10'>
                <div className='pt-[26px] text-center bg-[#010818] px-20 rounded-xl'>
                    <img className='flex mx-auto w-8 h-8 mb-5' src="images/clients.png" alt="" />
                    <h2 className='text-white font-bold text-xl'>Happy Clients</h2>
                    <h3 className='text-[32px] font-medium text-[#a5a5a5] pb-2'>15+</h3>
                </div>
                <div className='pt-[26px] text-center bg-[#010818] px-20 rounded-xl'>
                    <img className='flex mx-auto w-8 h-8 mb-5' src="images/clock.png" alt="" />
                    <h2 className='text-white font-bold text-xl'>Working Hours</h2>
                    <h3 className='text-[32px] font-medium text-[#a5a5a5] pb-2'>500+</h3>
                </div>
                <div className='pt-[26px] text-center bg-[#010818] px-20 rounded-xl'>
                    <img className='flex mx-auto w-8 h-8 mb-5' src="images/projects.png" alt="" />
                    <h2 className='text-white font-bold text-xl'>Projects Completed</h2>
                    <h3 className='text-[32px] font-medium text-[#a5a5a5] pb-2'>60+</h3>
                </div>
                <div className='pt-[26px] text-center bg-[#010818] px-20 rounded-xl'>
                    <img className='flex mx-auto w-8 h-8 mb-5' src="images/coffee.png" alt="" />
                    <h2 className='text-white font-bold text-xl'>Coffee Consumed</h2>
                    <h3 className='text-[32px] font-medium text-[#a5a5a5] pb-2'>1000+</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;