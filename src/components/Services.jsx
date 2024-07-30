import React from 'react';
import dv from './assets/home-delivery-svgrepo-com.svg'
import myvector from './assets/warehouse-svgrepo-com.svg'
import charity_run from './assets/delivery-svgrepo-com.svg'


function Services() {


  return (
    <div className=' flex justify-around align-center w-auto h-1/2 bg-slate-400 my-5 py-2 px-11 mx-11 rounded-3xl '>
      <div className='Card'> 
        <img src={dv} class="aspect-auto" />
        <div className='text-center text-3xl'> MOVING </div>
        </div>

        <div className='Card'> 
        <img src={myvector} class="aspect-auto" />
        <div className='text-center text-3xl'> WASTE REMOVAL </div>
        </div>

        <div className='Card'> 
        <img src={charity_run} class="aspect-auto" />
        <div className='my-3 text-center text-3xl'> CHARITY RUNS </div>
        </div>
    </div>
  )

}

export default Services
