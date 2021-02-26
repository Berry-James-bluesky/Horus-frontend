import React, { useState, useEffect } from 'react';
import logo from '../../imgs/logo.svg';
import { SidebarItem } from "./SidebarItem";
import { Profile } from './Profile';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import Pyramids from '../../imgs/sidebar-topper.jpg';
import Noise from '../../imgs/noise.png';
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

    const handleLinksClick = () => {
        setShowLinks(!showLinks)
    };

    const linksStatus = showLinks ? 'show-links' : 'hide-links';
    const burgerIconStatus = showLinks ? 'transform rotate-90' : 'transform rotate-0';

    let currentLocation = useLocation().pathname.split('/')[1];

    return(
        <div className={`h-screen pl-6 sticky fixed top-0 left-0 w-96 z-10 overflow-hidden sidebar ${size}`}>
            <div className='pt-4 sidebar-toggle-container'>
                <button onClick={() => {size === 'full-size-sidebar' ? setSize('small-size-sidebar') : setSize('full-size-sidebar')}} className='sidebar-toggle-btn'><Icon name='arrow left' /></button>
            </div>
            <div className='flex align-center w-full row-span-1 pt-6 pb-2 mb-2 pl-2 branding-container'>
                <Link to='/' className='font-primary branding-link'>
                    <span className='font-serif text-2xl font-normal inline-flex'>
                        <img src={logo} className='w-8 horus-logo' alt='Horus'/>
                        <span className='horus branding-text'>Horus</span>
                    </span>
                </Link>

                <button className={`hamburger-icon md:hidden block transition duration-300 ${burgerIconStatus}`} onClick={handleLinksClick}>
                    <Icon name={'bars'} />
                </button>
                <span className={'font-sans ml-4 text-gray-200 md:hidden block'}>{currentLocation}</span>
            </div>
            <div className={`grid grid-row-6 navlink-container ${linksStatus}`}>
                <div className={`block md:hidden sidebar-header flex items-center justify-start pl-4`} style={{backgroundImage: `url(${Pyramids})`}}><h2 className={'font-serif font-normal'}>Horus</h2></div>
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