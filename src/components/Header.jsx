import { Link } from "react-router-dom"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
function Header () {
  return (
    <div className="text-black">
      <div className="lg:flex w-full hidden ">
        <div className="flex w-full items-center">
          <Link><h3>COLLECTIONS</h3></Link>
          <Link><h3>NEW ARRIVALS</h3></Link>
          <Link><h3>THE ATELIER</h3></Link>
        </div>
        <div className="flex w-full">
          <h1>Myster</h1>
        </div>
        <div className="flex w-full">
          <Link><h3>PHILOSOPHY</h3></Link>
          <Link><h3>JOURNAL</h3></Link>
          <div><input type="search" name="" id="" placeholder="Search...." /></div>
          <img src="" alt="" />
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
          <div className="flex-none">
            <ShoppingBagIcon color="primary" sx={{ '&:hover': { color: 'red' } }} />
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Header