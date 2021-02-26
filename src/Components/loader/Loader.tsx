import React from 'react';
import './Loader.scss'
import LoaderIcon from '../../imgs/loader.svg';

export const Loader = () => {

   return(
       <div className={'full-loader'} >
           <img src={LoaderIcon} alt={'page loading'} />
       </div>
   )

}