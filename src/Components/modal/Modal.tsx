import React, { useState, useEffect } from 'react';
import './Modal.scss';

/**
 * A simple modal component
 *
 */

interface Props {
    active: boolean
    /** Toggled whether or not the modal is active */
    closeModal: any
    /** Pass through the same handler function used to open the modal in the parent el */
    title: string
    /** Title text for the modal */
    content: any
    /** Content to be displayed in the modal (any valid JSX) */
}

export const Modal = (props: Props) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(props.active)
    }, [props.active]);



    if(!isVisible) {
        return(<div></div>)
    } else {

        return (
            <div className={'w-screen h-screen z-50 top-0 left-0 flex items-center justify-center fixed modal-underlay'}>
                <div className={'modal-container'}>
                    <div className='modal-header'>
                        <h1 className={'title'}>{props.title}</h1>
                    </div>
                    <button onClick={props.closeModal} className={'modal-close-btn'}>&times;</button>

                    <div>{props.content}</div>
                </div>
            </div>
        )
    }
}