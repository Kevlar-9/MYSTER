import { useState } from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import signupImg from '../assets/signin.jpg';
import google from '../assets/google.svg';
import { Link } from 'react-router-dom';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-full bg-white text-black">
      <div className="hidden sm:block">
        <Header />
        <main className="flex min-h-[calc(100vh-128px)]">
          <div className="w-5/12 bg-white p-12 flex items-center">
            <div className="w-full">
              <div className="p-5 text-left">
                <h1 className="text-2xl font-[serif]">MYSTER</h1>
              </div>
              <div className="p-4">
                <div className="flex-col">
                  <h1 className="text-3xl font-semibold font-[arial]">Join the Inner Circle</h1>
                  <p className="text-gray-700 mb-6">Create your account and explore curated luxury designed for modern living.</p>
                </div>
                <form action="">
                  <label className="text-sm text-gray-600">FULL NAME</label>
                  <input className="ring-1 ring-gray-400 text-gray-600 bg-white p-4 w-full rounded-lg mb-3 mt-3" type="text" placeholder="Evelyn Thorne" />
                  <label className="text-sm text-gray-600">EMAIL ADDRESS</label>
                  <input className="ring-1 ring-gray-400 text-gray-600 bg-white p-4 w-full rounded-lg mb-3 mt-3" type="email" placeholder="evelyn@myster.com" />
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
                  <label className="flex items-center gap-3 mb-3 mt-6 cursor-pointer text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className="h-4 w-5 rounded-md border border-gray-300 bg-white accent-black focus:ring-0 outline-none"
                    />
                    <span className="leading-5">Subscribe to our newsletter for exclusive previews</span>
                  </label>
                  <button type="button" className="w-full rounded-lg border-2 border-black mt-3 mb-10 bg-black px-4 py-4 text-sm font-semibold text-white transition duration-150 ease-in-out hover:bg-black/95 hover:shadow-lg">
                    CREATE ACCOUNT
                  </button>
                </form>

                <div>
                  <h1 className="text-center text-sm mb-6">OR CONTINUE WITH</h1>
                  <div className="flex justify-between gap-4 mb-6">
                    <Link to='/' className="gap-2 bg-white rounded-lg flex-1 p-4 flex items-center justify-center hover:bg-gray-100 ring-1 ring-black/30 hover:ring-2 transition duration-150">
                      <img src={google} alt="Google" className="h-5" />
                      <span className="text-sm">Google</span>
                    </Link>
                    <Link to='/' className="gap-2 bg-white rounded-lg flex-1 p-4 flex items-center justify-center hover:bg-gray-100 ring-1 ring-black/30 hover:ring-2 transition duration-150">
                      <AppleIcon />
                      <span className="text-sm">Apple</span>
                    </Link>
                  </div>
                </div>

                <div className="flex gap-3 items-center justify-center">
                  <h3 className="text-black/70">Already a member?</h3>
                  <Link to='/Signin' className="underline font-semibold">Sign In</Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-7/12 bg-black/75 relative bg-contain bg-center bg-no-repeat min-h-[calc(100vh-128px)]"
            style={{ backgroundImage: `url(${signupImg})` }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
            <div className="relative z-10 h-full flex items-end p-12">
              <div className="text-white max-w-md">
                <p className="uppercase text-sm tracking-wide mb-3">Editorial Series</p>
                <h2 className="text-3xl font-serif">Discover the art of mindful luxury.</h2>
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
          <div className="flex-col text-center">
            <h1 className="text-3xl font-semibold font-[arial]">Join the Inner Circle</h1>
            <p className="text-gray-700 mb-6">Discover curated luxury and timeless design.</p>
          </div>
          <div>
            <form action="">
              <label className="text-sm text-gray-600">FULL NAME</label>
              <input className="ring-1 ring-gray-400 text-gray-600 bg-white p-4 w-full rounded-lg mb-3 mt-3" type="text" placeholder="Evelyn Thorne" />
              <label className="text-sm text-gray-600">EMAIL ADDRESS</label>
              <input className="ring-1 ring-gray-400 text-gray-600 bg-white p-4 w-full rounded-lg mb-3 mt-3" type="email" placeholder="evelyn@myster.com" />
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
              <label className="flex items-center gap-3 mb-3 mt-6 cursor-pointer text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="h-4 w-5 rounded-md border border-gray-300 bg-white accent-black focus:ring-0 outline-none"
                />
                <span className="leading-5">Subscribe to our newsletter for exclusive previews</span>
              </label>
              <button type="button" className="w-full rounded-lg border-2 border-black mt-3 mb-10 bg-black px-4 py-4 text-sm font-semibold text-white transition duration-150 ease-in-out hover:bg-black/95 hover:shadow-lg">
                CREATE ACCOUNT
              </button>
            </form>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <h3 className="text-black/70">Already a member?</h3>
            <Link to='/Signin' className="underline font-semibold">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;