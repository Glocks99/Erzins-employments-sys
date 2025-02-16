import React, { useState } from 'react'

function Navbar() {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <header className='flex items-center justify-between bg-gray-900 text-white'>
        <div className="h-[80px]"><img className='h-full w-full' src="/erz.png" alt="" /></div>

        <nav className='flex items-center gap-2'>
            <ul className='hidden md:flex items-center gap-2.5'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className="md:hidden cursor-pointer" onClick={() => setIsOpened(!isOpened)}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <a href="#" className='hidden md:block'>Login <i className="fa-solid fa-arrow-right"></i></a>
        </nav>

        {isOpened && <div className='md:hidden z-10 fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex items-center justify-center'>
              <div className=" border  border-slate-500 absolute w-full flex items-center justify-between top-0 right-0 p-5 cursor-pointer" onClick={() => setIsOpened(false)}>
                  <div className="flex items-center gap-2.5">
                    <img className='h-[50px] w-[50px]' src="/erz.png" alt="" />
                    <p>Login <i className='fas fa-arrow-right'></i></p>
                  </div>
                  <i className="fa-solid fa-times"></i>
              </div>
              <ul className='flex flex-col gap-2.5 z-10 text-slate-600'>
                  <li><a href=""><i className='fas fa-home'></i> Home</a></li>
                  <li><a href=""><i className='fas fa-question-circle'></i> About</a></li>
                  <li><a href=""><i className='fas fa-suitcase'></i> Services</a></li>
                  <li><a href=""><i className='fas fa-phone'></i> Contact</a></li>
              </ul>
            </div>}
    </header>
  )
}

export default Navbar