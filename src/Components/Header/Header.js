import React, { useState } from 'react';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
    const [navBar, setNavBar] = useState(false);

    const navHandler = () => {
        setNavBar(!navBar);
    }

    return (
        <div className='w-full px-[60px] py-[30px] md:px-[100px] flex justify-between items-center  bg-[#00040e]'>
            <Link to='/'>
                <img src='images/logo.png' alt='' className=''></img>
            </Link>
            <div >
                <ul className='hidden md:flex gap-5 md:gap-20 text-sm text-white'>
                    <li> <ActiveLink to='/'>Home</ActiveLink></li>
                    <li> <a href="https://www.behance.net/abdullahalmaruf1" target='blank'>Portfolio</a></li>
                    <li> <ActiveLink to='/contact'>Contact</ActiveLink></li>
                </ul>
            </div>
            <div onClick={navHandler} className='md:hidden z-20'>
                {!navBar ? <FaBars className='text-white' size={25}></FaBars> : <FaTimes className='text-white' size={32}></FaTimes>}
            </div>
            <div className={navBar ? ' md:hidden absolute top-0 left-0 w-full h-screen bg-[#010818] flex flex-col justify-center items-center' : 'hidden'}>
                <ul>
                    <li className='py-6 text-4xl text-white'> <Link onClick={navHandler} to='/' >Home</Link></li>
                    <li className='py-6 text-4xl text-white'><a onClick={navHandler} href='https://www.behance.net/abdullahalmaruf1' target='blank' >Portfolio</a></li>

                    <li className='py-6 text-4xl text-white'> <Link onClick={navHandler} to='/contact'>Contact</Link></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;