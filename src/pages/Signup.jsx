import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

import {Link} from 'react-router-dom'
function Signup () {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-full bg-white">
      <div className="hidden">1</div>


      <div className="bg-white h-full text-black sm:hidden">
        <div className="p-5 text-center">
          <h1 className="text-2xl font-[playfair]">MYSTER</h1>
        </div>
        <div className="p-4 h-full">
        <div className="flex-col text-center">
          <h1 className="text-4xl font-bold font-[playfair] mb-3">Join the Inner Circle</h1>
          <p className='text-gray-700 mb-15'>Discover a curated world of <br /> understated luxury and timeless <br /> design</p>
        </div>
        <div>
            <form action="">
              <label className="text-sm text-gray-600">FULL NAME</label>
              <input className="ring-1 ring-gray-400 text-gray-600 bg-white p-4 w-full rounded-lg mb-3 mt-3" type="text"  placeholder="Evelyn Thorne"/>
              <label className="text-sm text-gray-600">EMAIL ADDRESS</label>
              <input className="ring-1 ring-gray-400 text-gray-600 bg-white p-4 w-full rounded-lg mb-3 mt-3" type="email"  placeholder="evenlyn@myster.com"/>
              <label className="text-sm text-gray-600">PASSWORD</label>
              <div className="relative mb-3 mt-3">
                <input
                  className="ring-1 ring-gray-400 text-gray-600 bg-white p-4 w-full rounded-lg pr-12"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="**********"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <VisibilityIcon fontSize="small" />
                </button>
              </div>
              <label className='flex items-center gap-3 mb-3 mt-6 cursor-pointer text-sm text-gray-700'>
                <input
                  type="checkbox"
                  className='h-4 w-5 rounded-md border border-gray-300 bg-white accent-black focus:ring-0 outline-none'
                />
                <span className='leading-5'>Subscribe to our newsletter for exclusive previews</span>
              </label>
              <button type="button" className="w-full rounded-lg border-2 border-black mt-3 mb-9 bg-black px-4 py-4 text-sm font-semibold text-white  transition duration-150 ease-in-out hover:bg-black/95 hover:shadow-lg">
                CREATE ACCOUNT
              </button>
            </form>
        </div>


        <div className='flex gap-5 items-center justify-center'>
          <h3>Already a member?</h3>
          <Link to='/Signin' className='underline font-semibold'>Sign In</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signup