// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import {Icon} from "semantic-ui-react";
import './HamburgerButton.scss';

const HamburgerButton = (props: any) => {

    return(
        <button className="burger-btn" onClick={props.burgerToggle}><Icon name='th'></Icon></button>
    )

}

export default HamburgerButton