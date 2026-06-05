import { Link } from "react-router-dom"
import bag from '../assets/bag.svg'
import PersonIcon from '@mui/icons-material/Person';

function Header () {
  return (
    <div className="text-black bg-white">
      <div className="lg:flex w-full hidden p-4 lg:justify-evenly">
        <div className="flex w-full items-center justify-evenly">
          <Link><h3 className="text-sm text-gray-600 font-[arial]">COLLECTIONS</h3></Link>
          <Link><h3 className="text-sm text-gray-600 font-[arial]">NEW ARRIVALS</h3></Link>
          <Link><h3 className="text-sm text-gray-600 font-[arial]">THE ATELIER</h3></Link>
        </div>
        <div className="w-full flex items-center justify-center">
          <h1 className="text-4xl font-[serif]">Myster</h1>
        </div>
        <div className="flex w-full items-center justify-evenly">
          <Link><h3 className="text-sm text-gray-600 font-[arial]">PHILOSOPHY</h3></Link>
          <Link><h3 className="text-sm text-gray-600 font-[arial]">JOURNAL</h3></Link>
          <img className="cursor-pointer" src={bag} alt="" />
          <Link to='/Signup'><PersonIcon /></Link>
        </div>

      </div>


      <div className="bg-red-200 flex lg:hidden">
        <div className="navbar bg-white shadow-sm flex justify-around gap-30 w-full">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
            </button>
          </div>
          <div className="">
          <h1>Myster logo is here</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to='/'><img className='cursor-pointer' src={bag} alt="" /></Link>
            <Link to='/Signup'><PersonIcon /></Link>
          </div>
        </div> 

               <div>
                <div>
                  
                </div>
                <div></div>
               </div>
      </div>
    </div>
  )
}

export default Header