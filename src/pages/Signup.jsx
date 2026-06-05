import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import {Link} from 'react-router-dom'
function Signup () {
  return (
    <div className="h-full">
      <div className="hidden">1</div>


      <div className="bg-white h-full text-black">
        <div className="p-5 text-center">
          <h1 className="text-2xl font-[serif]">MYSTER</h1>
        </div>
        <div className="p-4 bg-red-100 h-full">
        <div className="flex-col">
          <h1 className="text-2xl font-semibold">Welcome Back</h1>
          <p>Please enter your details to continue your <br />journey.</p>
        </div>
        <div>
            <form action="">
              <label htmlFor="">EMAIL ADDRESS</label>
              <input className="bg-black text-white p-4 w-100 rounded-lg" type="email" name="" id=""  placeholder="name@example.com"/>
              <label htmlFor="">PASSWORD</label>
              <input className="bg-black text-white p-4 w-100 rounded-lg" type="password" name="" id=""  placeholder="name@example.com"/>
              <input className="bg-black text-white p-4 w-100 rounded-lg" type="button" value="SIGN IN" />
            </form>
        </div>

        <div>
          <h1 className="text-center text-sm">OR CONTINUE WITH</h1>
          <div className="flex justify-evenly gap-4">
          <Link to='/' className="bg-white rounded-lg w-full p-4 flex items-center justify-center hover:bg-gray-200 transition duration-150">
          <div>
            <GoogleIcon />
          </div>
          </Link>
          <Link to='/' className="bg-white rounded-lg w-full p-4 flex items-center justify-center hover:bg-gray-200 transition duration-150">
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