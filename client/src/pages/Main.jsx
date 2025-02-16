import React from 'react'
import heroBg from '../assets/hero-bg.jpg';

function Main() {
  return (
    <main className='mt-[50px] flex flex-col gap-[100px]'>
        <section className='flex flex-col items-center gap-3 bg-slate-800'>
            <p className='border w-fit p-1 text-green-400 mb-2.5 mt-2.5 rounded-full text-sm font-light'>Features</p>
            <h1 className='text-3xl font-bold'>Feature Breakdown</h1>
            <p className='text-center'>Secure, scalable and decentralized solutions for you 👉 - Experience the future of financial freedom</p>

            <div className="flex flex-col md:flex-row gap-2 ">
                <div className=" flex flex-col items-center gap-2 border border-slate-600 p-6">
                    <i className="fa-solid fa-layer-group text-5xl text-green-400"></i>
                    <p>Scalability</p>
                    <p className='text-sm px-2 text-center text-slate-500'>Adapt and grow, no matter the demand on grow</p>
                </div>
                <div className="flex flex-col items-center gap-2 border border-slate-600 p-6">
                    <i className="fa-solid fa-circle-check text-5xl text-green-400"></i>
                    <p>Decentralized</p>
                    <p className='text-sm px-2 text-center text-slate-500'>Adapt and grow, no matter the demand on grow</p>
                </div>
                <div className="flex flex-col items-center gap-2 border border-slate-600 p-6">
                    <i className="fa-solid fa-shield text-5xl text-green-400"></i>
                    <p>Secured</p>
                    <p className='text-sm px-2 text-center text-slate-500'>Adapt and grow, no matter the demand on grow</p>
                </div>
                <div className="flex flex-col items-center gap-2 border border-slate-600 p-6">
                    <i className="fa-solid fa-people-group text-5xl text-green-400"></i>
                    <p>Connectivity</p>
                    <p className='text-sm px-2 text-center text-slate-500'>Adapt and grow, no matter the demand on grow</p>
                </div>
            </div>
        </section>

        <section>
            <div className="flex flex-col items-center">
                    <p className='border w-fit p-1 px-2 text-green-400 mb-2.5 mt-2.5 rounded-full text-sm font-light'>Meet Our Team</p>
                    <p className='text-3xl font-bold text-center'>Our Esteemed Members</p>
            </div>

            <div className="flex gap-4 md:gap-[30px] items-center overflow-auto justify-center mt-8">
                <div className="">
                    <div className="h-[100px] rounded-full overflow-hidden w-[100px]"><img className='h-full w-full' src={heroBg} alt="" /></div>

                    <div className="flex flex-col items-center">
                        <p>James</p>
                        <p>CEO</p>
                    </div>

                    <ul className='flex items-center gap-2.5'>
                        <li><a href=""><i className='fa-brands fa-facebook'></i> </a></li>
                        <li><a href=""><i className='fa-brands fa-github'></i></a></li>
                        <li><a href=""><i className='fa-brands fa-instagram'></i></a></li>
                        <li><a href=""><i className='fa-brands fa-twitter'></i> </a></li>
                    </ul>
                </div>
                <div className="">
                    <div className="h-[100px] rounded-full overflow-hidden w-[100px]"><img className='h-full w-full' src={heroBg} alt="" /></div>

                    <div className="flex flex-col items-center">
                        <p>James</p>
                        <p>CEO</p>
                    </div>

                    <ul className='flex items-center gap-2.5'>
                        <li><a href=""><i className='fa-brands fa-facebook'></i> </a></li>
                        <li><a href=""><i className='fa-brands fa-github'></i></a></li>
                        <li><a href=""><i className='fa-brands fa-instagram'></i></a></li>
                        <li><a href=""><i className='fa-brands fa-twitter'></i> </a></li>
                    </ul>
                </div>
                <div className="">
                    <div className="h-[100px] rounded-full overflow-hidden w-[100px]"><img className='h-full w-full' src={heroBg} alt="" /></div>

                    <div className="flex flex-col items-center">
                        <p>James</p>
                        <p>CEO</p>
                    </div>

                    <ul className='flex items-center gap-2.5'>
                        <li><a href=""><i className='fa-brands fa-facebook'></i> </a></li>
                        <li><a href=""><i className='fa-brands fa-github'></i></a></li>
                        <li><a href=""><i className='fa-brands fa-instagram'></i></a></li>
                        <li><a href=""><i className='fa-brands fa-twitter'></i> </a></li>
                    </ul>
                </div>
                <div className="">
                    <div className="h-[100px] rounded-full overflow-hidden w-[100px]"><img className='h-full w-full' src={heroBg} alt="" /></div>

                    <div className="flex flex-col items-center">
                        <p>James</p>
                        <p>CEO</p>
                    </div>

                    <ul className='flex items-center gap-2.5'>
                        <li><a href=""><i className='fa-brands fa-facebook'></i> </a></li>
                        <li><a href=""><i className='fa-brands fa-github'></i></a></li>
                        <li><a href=""><i className='fa-brands fa-instagram'></i></a></li>
                        <li><a href=""><i className='fa-brands fa-twitter'></i> </a></li>
                    </ul>
                </div>
                <div className="">
                    <div className="h-[100px] rounded-full overflow-hidden w-[100px]"><img className='h-full w-full' src={heroBg} alt="" /></div>

                    <div className="flex flex-col items-center">
                        <p>James</p>
                        <p>CEO</p>
                    </div>

                    <ul className='flex items-center gap-2.5'>
                        <li><a href=""><i className='fa-brands fa-facebook'></i> </a></li>
                        <li><a href=""><i className='fa-brands fa-github'></i></a></li>
                        <li><a href=""><i className='fa-brands fa-instagram'></i></a></li>
                        <li><a href=""><i className='fa-brands fa-twitter'></i> </a></li>
                    </ul>
                </div>
            </div>
        </section>

        
        <section>

            <div className="flex flex-col md:flex-row justify-center gap-2.5 items-center">
                <div className="flex-1">
                    <img src={heroBg} alt="" />
                </div>
                <div className="flex-1">
                <p className='border w-fit p-1 px-2 text-green-400 mb-2.5 mt-2.5 rounded-full text-sm font-light'>services</p>
                <p className='text-3xl mb-1.5 font-bold'>Services we provide ⚒</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magni exercitationem totam aliquam tempore magnam possimus aut assumenda consectetur eum error nam quam et dicta quae, recusandae reprehenderit neque qui?</p>
                    <button className='border border-blue-200 p-1.5'>read more <i className='fas fa-arrow-right'></i></button>
                </div>
            </div>

        </section>
   
        <section className='flex flex-col items-center gap-3'>
            <div className="flex flex-col items-center">
                <p className='border w-fit p-1 px-2 text-green-400 mb-2.5 mt-2.5 rounded-full text-sm font-light'>FAQ</p>
                <p className='text-3xl font-bold text-center'>Get Answers To Common Questions</p>
                <p className='text-sm text-slate-500 text-center p-3'>From basics to advanced topics, find everything you need to know right here. Lets us help you simplify the process and find the clarity your looking.</p>
            </div>

            <div className="w-full flex flex-col gap-2">
                <div className="p-3 border">
                    <div className="flex justify-between items-center">
                        <p>How does it work?</p>
                        <i className="fa-solid fa-add"></i>
                    </div>
                    
                    <div className="p-2 text-sm font-light hidden">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis aperiam sequi illum quaerat praesentium, officia maxime amet hic expedita assumenda facilis ducimus doloribus veniam numquam deserunt. Mollitia, laboriosam saepe.</p>
                    </div>
                </div>
                <div className="p-3 border">
                    <div className="flex justify-between items-center">
                        <p>How does it work?</p>
                        <i className="fa-solid fa-add"></i>
                    </div>
                    
                    <div className="p-2 text-sm font-light hidden">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis aperiam sequi illum quaerat praesentium, officia maxime amet hic expedita assumenda facilis ducimus doloribus veniam numquam deserunt. Mollitia, laboriosam saepe.</p>
                    </div>
                </div>
                <div className="p-3 border">
                    <div className="flex justify-between items-center">
                        <p>How does it work?</p>
                        <i className="fa-solid fa-add"></i>
                    </div>
                    
                    <div className="p-2 text-sm font-light hidden">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis aperiam sequi illum quaerat praesentium, officia maxime amet hic expedita assumenda facilis ducimus doloribus veniam numquam deserunt. Mollitia, laboriosam saepe.</p>
                    </div>
                </div>
                <div className="p-3 border">
                    <div className="flex justify-between items-center">
                        <p>How does it work?</p>
                        <i className="fa-solid fa-add"></i>
                    </div>
                    
                    <div className="p-2 text-sm font-light hidden">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis aperiam sequi illum quaerat praesentium, officia maxime amet hic expedita assumenda facilis ducimus doloribus veniam numquam deserunt. Mollitia, laboriosam saepe.</p>
                    </div>
                </div>
                <div className="p-3 border">
                    <div className="flex justify-between items-center">
                        <p>How does it work?</p>
                        <i className="fa-solid fa-add"></i>
                    </div>
                    
                    <div className="p-2 text-sm font-light hidden">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis aperiam sequi illum quaerat praesentium, officia maxime amet hic expedita assumenda facilis ducimus doloribus veniam numquam deserunt. Mollitia, laboriosam saepe.</p>
                    </div>
                </div>
            </div>
        </section>


        <section>
            <div className="flex flex-col items-center">
                    <p className='border w-fit p-1 px-2 text-green-400 mb-2.5 mt-2.5 rounded-full text-sm font-light'>Ratings ⭐</p>
                    <p className='text-3xl font-bold text-center'>Trusted By Many</p>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
                <div className="w-full rounded h-fit md:w-[400px] border border-slate-600 p-3 flex flex-col gap-2.5">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="flex items-center gap-2.5">
                        <div className="h-[50px] w-[50px] rounded-full overflow-hidden"><img className='h-full w-full' src={heroBg} alt="" /></div>
                        <div className="">
                            <h1>James</h1>
                            <p className='text-sm font-thin'>Trader</p>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded h-fit md:w-[400px] border border-slate-600 p-3 flex flex-col gap-2.5">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="flex items-center gap-2.5">
                        <div className="h-[50px] w-[50px] rounded-full overflow-hidden"><img className='h-full w-full' src={heroBg} alt="" /></div>
                        <div className="">
                            <h1>James</h1>
                            <p className='text-sm font-thin'>Trader</p>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded h-fit md:w-[400px] border border-slate-600 p-3 flex flex-col gap-2.5">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="flex items-center gap-2.5">
                        <div className="h-[50px] w-[50px] rounded-full overflow-hidden"><img className='h-full w-full' src={heroBg} alt="" /></div>
                        <div className="">
                            <h1>James</h1>
                            <p className='text-sm font-thin'>Trader</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="flex flex-col items-center">
                <p className='border w-fit p-1 px-2 text-green-400 mb-2.5 mt-2.5 rounded-full text-sm font-light'>send us a message</p>
                <p className='text-3xl font-bold text-center'>Get In Contact With Us!</p>
            </div>
            
            <form action="" className='mt-8 md:px-[100px]'>
                <div className="flex flex-col md:flex-row gap-2">
                    <input type="text" placeholder='Full Name' className='border-b border-slate-400 p-2 w-full' />
                    <input type="email" placeholder='Email Address' className='border-b border-slate-400 p-2 w-full' />
                </div>
                <textarea name="" id="" cols="30" rows="10" className='border-b border-slate-400 mt-1.5 p-2 w-full' placeholder='Message'></textarea>
                <button className='bg-green-400 text-white w-full p-2 rounded'>Send Message</button>
            </form>
        </section>
    </main>
  )
}

export default Main