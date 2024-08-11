import React from 'react';
import dv from './assets/home-delivery-svgrepo-com.svg'
import myvector from './assets/warehouse-svgrepo-com.svg'
import charity_run from './assets/delivery-svgrepo-com.svg'


function Services() {


  return (

    <div className='flex flex-row justify-between items-center w-auto h-1/3 py-3 px-3 mx-11 my-5 rounded-3xl' id="service">
      <div className='Card'> 
        <img src={dv} class="aspect-auto h-1/2" />
        <div className='text-center text-3xl font-bold text-white'> MOVING </div>
        <p className='text-xl text-center text-white font-semibold'> Recieve relocation solutions with efficieny.</p>
        <p className='text-l text-white w-80 h-10 text-wrap'> With us you can remove the hastle from moving, effortlessly relocate with the assistance of our team. Contact us to see if we are right for you! </p>
        </div>

        <div className='Card'> 
        <img src={myvector} class="aspect-auto h-1/2" />
        <div className='text-center text-3xl font-bold text-white'> WASTE REMOVAL </div>
        <p className='text-xl text-center text-white font-semibold'> Recieve relocation solutions with efficieny.</p>
        <p className='text-l text-white w-80 h-10 text-wrap'> With us you can remove the hastle from moving, effortlessly relocate with the assistance of our team. Contact us to see if we are right for you! </p>
        </div>

        <div className='Card'> 
        <img src={charity_run} class="aspect-auto h-1/2" />
        <div className='text-center text-3xl font-bold text-white'> CHARITY RUNS </div>
        <p className='text-xl text-center text-white font-semibold'> Recieve relocation solutions with efficieny.</p>
        <p className='text-l text-white w-80 h-10 text-wrap'> With us you can remove the hastle from moving, effortlessly relocate with the assistance of our team. Contact us to see if we are right for you! </p>
        </div>
    </div>
  )

}

export default Services
