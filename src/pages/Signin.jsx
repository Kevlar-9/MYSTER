import { useState } from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import siginimg from '../assets/signin.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import google from '../assets/google.svg'

import {Link} from 'react-router-dom'
function Signin () {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-full bg-white text-black">
      <div className="hidden sm:block">
        <Header />
        <main className='flex min-h-[cal(100vh-128px)]'>
          <div
            className='w-7/12 bg-black/75 relative bg-contain  bg-center bg-no-repeat min-h-[calc(100vh-128px)]'
            style={{ backgroundImage: `url(${siginimg})` }}
          >
            <div className='absolute inset-0 bg-lineaar-to-t from-black/80 to-transparent'></div>
            <div className='relative z-10 h-full flex items-end p-12'>
              <div className='text-white max-w-md'>
                <p className='uppercase text-sm tracking-wide mb-3'>Editorial Series</p>
                <h2 className='text-3xl font-serif'>The art of intentionality and curated living.</h2>
              </div>
            </div>
          </div>

          <div className='w-5/12 bg-white p-12 flex items-center'>
            <div className='w-full'>
              <div className="p-5 text-left">
                <h1 className="text-2xl font-[serif]">MYSTER</h1>
              </div>
              <div className="p-4">
                <div className="flex-col">
                  <h1 className="text-3xl font-semibold font-[arial]">Welcome Back</h1>
                  <p className='text-gray-700 mb-6'>Please enter your details to continue your journey.</p>
                </div>
                <form action="">
                  <label className="text-sm text-gray-600">EMAIL ADDRESS</label>
                  <input className="ring-1 ring-gray-400 text-gray-600 bg-white p-4 w-full rounded-lg mb-3 mt-3" type="email"  placeholder="name@example.com"/>
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
                  <div className='flex items-end justify-end mb-3'>
                    <Link to='#' className='underline mt-3'>Forgot Password?</Link>
                  </div>
                  <button type="button" className="w-full rounded-lg border-2 border-black mt-3 mb-10 bg-black px-4 py-4 text-sm font-semibold text-white  transition duration-150 ease-in-out hover:bg-black/95 hover:shadow-lg">
                    SIGN IN
                  </button>
                </form>

                <div>
                  <h1 className="text-center text-sm mb-6">OR CONTINUE WITH</h1>
                  <div className="flex justify-between gap-4 mb-6">
                    <Link to='/' className="gap-2 bg-white rounded-lg flex-1 p-4 flex items-center justify-center hover:bg-gray-100 ring-1 ring-black/30 hover:ring-2 transition duration-150">
                      <img src={google} alt="Google" className='h-5'/>
                      <span className='text-sm'>Google</span>
                    </Link>
                    <Link to='/' className="gap-2 bg-white rounded-lg flex-1 p-4 flex items-center justify-center hover:bg-gray-100 ring-1 ring-black/30 hover:ring-2 transition duration-150">
                      <AppleIcon />
                      <span className='text-sm'>Apple</span>
                    </Link>
                  </div>
                </div>

                <div className='flex gap-3 items-center justify-center'>
                  <h3 className='text-black/70'>New to Myster?</h3>
                  <Link to='/Signup' className='underline font-semibold'>Create an account</Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>


      <div className="bg-white h-full text-black sm:hidden">
        <div className="p-5 text-center">
          <h1 className="text-2xl font-[serif]">MYSTER</h1>
        </div>
        <div className="p-4 h-full">
        <div className="flex-col">
          <h1 className="text-3xl font-semibold font-[arial]">Welcome Back</h1>
          <p className='text-gray-700 mb-13'>Please enter your details to continue your <br />journey.</p>
        </div>
        <div>
            <form action="">
              <label className="text-sm text-gray-600">EMAIL ADDRESS</label>
              <input className="ring-1 ring-gray-400 text-gray-600 bg-white p-4 w-full rounded-lg mb-3 mt-3" type="email"  placeholder="name@example.com"/>
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
              <div className='flex items-end justify-end mb-3'>
              <Link to='#' className='underline mt-3'>Forgot Password?</Link>
              </div>
              <button type="button" className="w-full rounded-lg border-2 border-black mt-3 mb-10 bg-black px-4 py-4 text-sm font-semibold text-white  transition duration-150 ease-in-out hover:bg-black/95 hover:shadow-lg">
                SIGN IN
              </button>
            </form>
        </div>

        <div>
          <h1 className="text-center text-sm mb-10">OR CONTINUE WITH</h1>
          <div className="flex justify-evenly gap-4 mb-10">
          <Link to='/' className="gap-2 bg-white rounded-lg w-full p-4 flex items-center justify-center hover:bg-gray-100 ring-1 ring-black/30 hover:ring-2 transition duration-150">
          <div>
            <img src={google}/>
          </div>
          <h3 className='text-xl'>Google</h3>
          </Link>
          <Link to='/' className="gap-2 bg-white rounded-lg w-full p-4 flex items-center justify-center hover:bg-gray-100 ring-1 ring-black/30 hover:ring-2 transition duration-150">
          <div>
            <AppleIcon />
          </div>
          <h3 className='text-xl'>Apple</h3>
          </Link>
          </div>
        </div>

        <div className='flex gap-3 items-center justify-center'>
          <h3 className='text-black/70'>New to Myster?</h3>
          <Link to='/Signup' className='underline font-semibold'>Create an account</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signin