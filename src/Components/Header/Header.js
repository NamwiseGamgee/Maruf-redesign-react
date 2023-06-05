import React from 'react';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-[#00040e] px-24 flex justify-between items-center py-8'>
            <Link to='/'>
                <img src="/images/logo.png" alt="" />
            </Link>
            <div className='text-sm flex gap-20 text-white'>
                <ActiveLink to='/'>Home</ActiveLink>
                <a href="">Portfolio</a>
                <ActiveLink to='/contact'>Contact</ActiveLink>
            </div>
        </div>
    );
};

export default Header;