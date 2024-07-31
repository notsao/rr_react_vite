import React from 'react';
import main_pic from './assets/mainpic_content.svg'
import Menu from './assets/Menu_icon.svg'

const MainContent = () => {
    return (
        <div className="text-black text-center flex justify-center align-center w-screen flex-col items-center font-family ">
            <img src={main_pic} class="w=1/3 h-1/3 tablet:w-1/3 tablet:h-1/2 tablet:px-24" />
            <div className='text-black align-center text-7xl my-5 font-bold '> MOVING CAN BE <span className='bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent'> TUFF, </span> LET US HELP! </div>
            <div className='w-1/2 h-16 my-4'><button className='button'> Get Started </button></div>
        </div>
    );
    };

export default MainContent;