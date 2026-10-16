import React from 'react'

const Registration = () => {
    return (
        <>
            <form action="" className='w-[30%] h-[50%] bg-amber-200 flex flex-col items-center justify-between'>
                <div className='w-full h-[25%] flex justify-center items-center gap-1.5 bg-emerald-600'>
                    <input type="text" className='w-[70%] h-16 bg-amber-400 rounded-md text-2xl' placeholder='Username'/>
                </div>
                <div className='w-full h-[25%] flex justify-center items-center gap-1.5 bg-emerald-600'>
                    <input type="email" className='w-[70%] h-16 bg-amber-400 rounded-md text-2xl' placeholder='Email'/>
                </div>
                <div className='w-full h-[25%] flex justify-center items-center gap-1.5 bg-emerald-600'>
                    <input type="password" className='w-[70%] h-16 bg-amber-400 rounded-md text-2xl' placeholder='Password'/>
                </div>
                    <p>Already have an account ?</p>
                <div className='w-full h-[25%]  bg-emerald-600'>
                    <button className='p-2 bg-blue-400 rounded-md' type='submit'>Submit</button>
                    <button className='p-2 bg-blue-400 rounded-md' type='reset'>Reset</button>
                </div>
            </form>
        </>
    )
}

export default Registration