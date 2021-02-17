import React from 'react';

/**
 * Side-bar component which displays the currently signed-in user's name and avatar
 */

interface Props {
    userName: string
    /** User's full name */
    userImg: string
    /** URL to user's avatar */
}

export const Profile: React.FC<Props> = (props) => {

    return(
        <div className='w-full h-18 bg-gray-100 border-t-2 flex items-center justify-start pr-10 pl-4 pt-2 pb-2 absolute bottom-0 left-0 shadow-md'>
            <img className='rounded-full w-12 h-12' src={props.userImg} alt='profile'/>
            <div>
                <span className='text-white text-l pl-4'>{props.userName}</span>
            </div>
        </div>
    )

}