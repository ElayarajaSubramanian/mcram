import React from 'react'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner__overlay'>
            <div className='w-[84%] mx-auto my-0 h-full flex items-center'>
                <div className='flex flex-col gap-10 justify-start'>
                    <h1 className='banner__h1'>Provide better Engineering Solution </h1>
                    <p>Provide better Engineering Solution for Energy and Oil & Gas field</p>
                    <button className='banner__btn'>About Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner