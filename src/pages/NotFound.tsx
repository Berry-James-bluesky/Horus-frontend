import React from 'react';
import './NotFound.scss';

export const NotFound: React.FC = () => {

    return(
        <div className='mt-40 nf-container'>
            <h1 className='flex justify-end items-center m-0 text-7xl border-r-2 pr-12'>404</h1>
            <h2 className='pl-12 flex justify-start items-center m-0 col-start-2 col-span-1'>Page Not Found</h2>
        </div>
    )

}