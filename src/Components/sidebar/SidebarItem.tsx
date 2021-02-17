import React from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";

/**
 * Used to link between pages/screens in 'Horus'
 * Utilises the { NavLink } react-router-dom for navigation (as this natively supports an 'active' className, whereas the standard { Link } does not
 */

interface Props {
    link: string
    /** Relative path to the page { SidebarItem } will link to */
    iconName: string
    /** The name of the FontAwesome icon to be displayed in the notification (reference list of available icons at https://react.semantic-ui.com/elements/icon/ ) */
    label: string
    /** Text to be displayed */
}

export const SidebarItem: React.FC<Props> = (props: any) => {


    return(
        <NavLink exact to={props.link} activeClassName='border-b-4 border-secondary text-primary' className='border-b-4 border-transparent'>
            <div className="burger-item pt-4 pb-2 mb-2 flex flex-row items-center font-sans text-l text-primary">
                <Icon className='burger-item-icon float-right' size='large' name={props.iconName} />

                <span className='ml-8'>{props.label}</span>

            </div>
        </NavLink>
    )

}