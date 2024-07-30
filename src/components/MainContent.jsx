import React from 'react';
import main_pic from './assets/mainpic_content.svg'
import Menu from './assets/Menu_icon.svg'

const MainContent = () => {
    return (
        <div className="text-black text-center flex justify-center align-center w-screen flex-col items-center font-family ">
            <img src={main_pic} class="w=1/3 h-1/3 " />
            <div className='text-black align-center text-7xl my-5 '> MOVING CAN BE <span> TUFF, </span> LET US HELP </div>
            <div className='w-1/4'><button className='button'> Get Started </button></div>
        </div>
    );
    };

export default MainContent;