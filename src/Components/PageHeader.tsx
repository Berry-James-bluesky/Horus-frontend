import React, { useState } from 'react';
import './PageHeader.scss';
import logo from '../imgs/logo.svg';
import { Link } from 'react-router-dom';
import HamburgerMenu from './burger *NOT IN USE*/HamburgerMenu';
import HamburgerButton from "./burger *NOT IN USE*/HamburgerButton";

const PageHeader = () => {

    const [isActive, setIsActive] = useState(false)

    return(
        <nav className="w-100 h-12 bg-gray-200 border-l-8 border-secondary">
            <Link to='/' className='link'>
                <div className="nav-branding">
                    <span className=''>Horus <img src={logo} className="branding-logo" alt='logo' /></span>
                </div>
            </Link>
            <div className="nav-options">
                <HamburgerButton activeState={isActive} burgerToggle={() => {isActive ? setIsActive(false) : setIsActive(true)}} />
                <HamburgerMenu burgerActive={isActive} />
            </div>
        </nav>
    )

}

export default(PageHeader)