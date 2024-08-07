import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="w-screen border-2 border-b-slate-400 bg-white ">
        <div className="max-w-7xl mx-auto  h-20 flex justify-between ">
          <div className="max-w-2xl flex items-center  justify-start text-3xl text-purple-500 font-bold ">You Logo</div>
          <div className="md:flex  justify-center items-center gap-8 hidden  ">
            <span className="font-bold text-blue-600 font-sans cursor-pointer hover:text-blue-400">
              <Link to='/'>
                Home
              </Link>

            </span>
            <Link to='/about' className="font-bold text-blue-600 font-sans cursor-pointer hover:text-blue-400">
              Movie
            </Link>
            <span className="font-bold text-blue-600 font-sans cursor-pointer hover:text-blue-400">Project</span>

          </div>
          <div className="items-center flex justify-end  sm:col-span-2 gap-5">

            <span className="font-bold text-blue-600 font-sans cursor-pointer hover:text-blue-400">Content Me</span>
          </div>

        </div>


      </div>
    </>
  )
}
