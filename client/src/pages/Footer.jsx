import React from 'react'

function Footer() {
  return (
    <footer className='bg-slate-800 border-t border-slate-700 mt-[100px] py-5 '>
        <div className="flex flex-col md:flex-row md:justify-between">
            <div className=""><img className='h-[200px]' src="/erz-white.png" alt="" /></div>

            <div className="">
                <h1 className='text-2xl font-bold md:text-center'>Quick Links</h1>

                <ul className='p-1.5 text-blue-400 text-sm flex flex-col gap-4'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Support</a></li>
                </ul>
            </div>


            <div className="">
                <h1 className='text-2xl font-bold md:text-center'>Help</h1>

                <ul className='p-1.5 text-blue-400 text-sm'>
                    <li><a href="">Frequently Asked Questions(FAQ)</a></li>
                </ul>
            </div>


            <div className="">
                <h1 className='text-2xl font-bold md:text-center'>Socials</h1>

                <ul className='p-1.5 text-blue-400 text-sm flex flex-col gap-4'>
                    <li><a href=""><i className='fa-brands fa-facebook'></i> Facebook</a></li>
                    <li><a href=""><i className='fa-brands fa-github'></i> Github</a></li>
                    <li><a href=""><i className='fa-brands fa-instagram'></i> Instagram</a></li>
                    <li><a href=""><i className='fa-brands fa-twitter'></i> Twitter</a></li>
                </ul>
            </div>
        </div>
        <p className='text-center'>@2025 Erzins Tech | All Rights Reserved</p>
    </footer>
  )
}

export default Footer