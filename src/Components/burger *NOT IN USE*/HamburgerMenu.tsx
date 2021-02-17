import React from 'react'
import './HamburgerMenu.scss';
import { SidebarItem } from '../sidebar/SidebarItem';

const HamburgerMenu = (props: any) => {

    if(!props.burgerActive) {
        return null;
    }

    return (
        <>
            <div className="burger-overlay" onClick={e => e.stopPropagation()}></div>
            <div className="burger-container">
                <div className="burger-header">Menu</div>
                <div className="burger-items">
                    <SidebarItem link='/' iconName='home' label='Dashboard'/>
                    <SidebarItem link='/statistics' iconName='chart pie' label='Statistics'/>
                    <SidebarItem link='/statistics' iconName='chart pie' label='Statistics'/>
                    <SidebarItem link='/settings' iconName='settings' label='Settings'/>
                    <SidebarItem link='/help' iconName='help' label='Help'/>
                    <SidebarItem link='/sign-out' iconName='sign out alt' label='Sign Out'/>
                </div>
            </div>
        </>
    )
}

export default HamburgerMenu