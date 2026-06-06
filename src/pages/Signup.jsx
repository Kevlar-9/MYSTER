import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import {Link} from 'react-router-dom'
function Signup () {
  return (
    <div className="h-full bg-white">
      <div className="hidden">1</div>


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
              <input className="ring-1 ring-gray-400 text-gray-600 bg-white p-4 w-full rounded-lg mb-3 mt-3 font-bold" type="password" placeholder="**********"/>
              <button type="button" className="w-full rounded-lg border-2 border-black mt-3 mb-15 bg-black px-4 py-4 text-sm font-semibold text-white  transition duration-500 ease-in-out hover:bg-gray-200 hover:text-black hover:shadow-lg">
                SIGN IN
              </button>
            </form>
        </div>

        <div>
          <h1 className="text-center text-sm mb-15">OR CONTINUE WITH</h1>
          <div className="flex justify-evenly gap-4 mb-10">
          <Link to='/' className="bg-white rounded-lg w-full p-3 flex items-center justify-center hover:bg-gray-300 ring-2 transition duration-150">
          <div>
            <GoogleIcon />
          </div>
          </Link>
          <Link to='/' className="bg-white rounded-lg w-full p-3 flex items-center justify-center hover:bg-gray-300 ring-2 transition duration-150">
          <div>
            <AppleIcon />
          </div>
          </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signup