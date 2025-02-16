import React, { useState } from 'react'

function Auth() {

    const [signup, setSignUp] = useState(false);

  return (
    <section className='h-[100vh] flex items-center justify-center'>
        
        <form action="" className='border border-amber-50 rounded-xl md:shadow-2xl h-fit w-[500px] p-4 flex flex-col gap-2.5'>
            {signup ? (
                <div className="flex flex-col items-center">
                    <img src="/erz.png" className='h-[150px]' alt="" />
                    <h1 className='text-5xl font-bold text-center'>SIGN IN</h1>
                    <p className='text-center'>Sign in into account</p>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <img src="/erz.png" className='h-[150px]' alt="" />
                    <h1 className='text-5xl font-bold text-center tracking-widest'>LOGIN</h1>
                    <p className='text-center'>Login into account</p>
                </div>
            )}

            {
                signup && (<div className="flex flex-col gap-1.5">
                    <label htmlFor="" className='flex gap-2.5 items-center text-slate-700'><i className="fa-solid fa-user"></i> Username</label>
                    <input type="text" className='h-[40px] border-1 px-2 border-slate-400 rounded-md' />
                </div>)
            }
            

            <div className="flex flex-col gap-1.5">
                <label htmlFor="" className='flex gap-2.5 items-center text-slate-700'><i className="fa-solid fa-envelope"></i> Email</label>
                <input type="text" className='h-[40px] px-2 border-1 border-slate-400 rounded-md' />
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="" className='flex gap-2.5 items-center text-slate-700'><i className="fa-solid fa-key"></i> Password</label>
                <input type="text" className='h-[40px] px-2 border-1 border-slate-400 rounded-md'/>
            </div>
            
            {
                signup && (<div className="flex flex-col gap-1.5">
                    <label htmlFor="" className='flex gap-2.5 items-center text-slate-700'><i className="fa-solid fa-user"></i> Type</label>
                    <select name="" id="" className='h-[40px] border-1 border-slate-400 rounded-md px-2'>
                        <option value="">User</option>
                        <option value="">Job Seeker</option>
                    </select>
                </div>)
            }

            {
                !signup && <p className='text-blue-700'>Forgot password ?</p>
            }

            {
                signup ? (<button className='bg-violet-800 py-2.5 rounded-md text-white'>Sign In <i className="fa-solid fa-arrow-right"></i></button>)
                : (
                    <button className='bg-violet-800 py-2.5 rounded-md text-white'>Login <i className="fa-solid fa-arrow-right"></i></button>   
                )
            }
            

            <p>{signup ? "Already have an account ?" : "Dont have an account?"} <span onClick={() => setSignUp(!signup)}><a href="#" className='text-blue-800'>{signup ? "Login" : "Sign In"}</a></span></p>
        </form>
    </section>
  )
}

export default Auth