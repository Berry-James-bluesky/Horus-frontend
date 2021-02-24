import React, { useState, useEffect } from 'react';
import logo from '../../imgs/logo.svg';
import { SidebarItem } from "./SidebarItem";
import { Profile } from './Profile';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './Sidebar.scss';

/**
 * Sidebar used as primary means for navigating 'Horus".
 * Populated with { SidebarItem }s which link to different pages
 * { Profile } is displayed at the bottom
 * changing the 'size' state will toggle between the small/large side bars
 *
 *
 * @constructor
 */

const Sidebar: React.FC = () => {

    const [size, setSize] = useState('full-size-sidebar');
    const [showLinks, setShowLinks] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('sidebar-pref') == null) {
            localStorage.setItem('sidebar-pref', 'full-size-sidebar')
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('sidebar-pref', size)
        console.log(localStorage.getItem('sidebar-pref'))
    }, [size]);


    const handleLinksClick = (e: any) => {
        setShowLinks(!showLinks)
    };

    const linksStatus = showLinks ? 'show-links' : 'hide-links'


    return(
        <div className={`h-screen bg-gray-50 border-r-2 background-black pl-6 sticky fixed top-0 left-0 w-80 z-10 overflow-hidden sidebar ${size}`}>
            <div className='pt-4 sidebar-toggle-container'>
                <button onClick={() => {size === 'full-size-sidebar' ? setSize('small-size-sidebar') : setSize('full-size-sidebar')}} className='sidebar-toggle-btn'><Icon name='arrow left' /></button>
            </div>
            <div className='flex align-center w-full row-span-1 pt-6 pb-2 mb-6 branding-container'>
                <Link to='/' className='font-primary branding-link'>
                    <span className='font-serif text-2xl font-normal inline-flex'>
                        <img src={logo} className='w-8 horus-logo' alt='Horus'/>
                        <span className='ml-8 text-primary branding-text'>Horus</span>
                    </span>
                </Link>
                <a className={'hamburger-icon md:hidden block'} onClick={handleLinksClick}>
                        <Icon name={'bars'} />
                    </a>
            </div>
            <div className={`grid grid-row-6 navlink-container ${linksStatus}`}>
                <SidebarItem link='/' iconName='home' label='Dashboard'/>
                <SidebarItem link='/statistics' iconName='chart pie' label='Statistics'/>
                <SidebarItem link='/calendar' iconName='calendar alternate outline' label='Calendar'/>
                <SidebarItem link='/settings' iconName='settings' label='Settings'/>
                <SidebarItem link='/help' iconName='help' label='Help'/>
                <SidebarItem link='/sign-out' iconName='sign out alternate' label='Sign Out'/>
            </div>
            <div>
                <Profile userName='Test name' userImg='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/luqnf2opx6fub6apceix.jpg'/>
            </div>
        </div>
    )

}

export default Sidebar