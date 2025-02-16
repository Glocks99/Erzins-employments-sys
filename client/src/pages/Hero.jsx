import React from 'react'


function Hero() {
  return (
    <>
        <section className='h-fit relative flex gap-3 flex-col md:flex-row overflow-hidden'>
            {/* <div className="flex-1">d</div> */}
            <div className="flex-1 filter backdrop-blur-sm md:backdrop-blur-none flex flex-col justify-center">
                <h1 className='text-4xl text-center md:text-left text-white font-bold'>Welcome to Erzins Tech</h1>
                <p className='border w-fit p-1 text-green-400 mb-2.5 mt-2.5 rounded-full text-sm font-light'>Trusted <i className="fa-solid fa-shield"></i></p>
                <p className='text-sm md:text-md text-blue-100 lg:mt-5'>"Looking for your next career move? Our platform connects job seekers with top employers, making job hunting faster, smarter, and easier. Whether you're searching for your dream job or hiring the perfect candidate, we've got you covered. Start your journey today and take the next step toward success!</p>

                <div className="mt-4 flex items-center gap-2">
                  <button className='bg-green-400 text-white w-full px-4 py-2 rounded'>Get Started 🚀</button>
                  <button className='border border-gray-600 w-full text-white px-4 py-2 rounded'>Next</button>

                </div>
            </div>
            <div className="h-[200px] w-full md:w-[300px]">
                <img src="/working.svg" alt="" className='h-full w-full object-contain' />
            </div>
        </section>
    </>
  )
}

export default Hero