import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="w-screen border-2 border-b-slate-400 bg-white ">
        <div className="max-w-7xl mx-auto  h-24 sm:grid sm:grid-cols-5 grid-cols-2 grid">
            <div className="max-w-2xl flex items-center  justify-start text-3xl text-purple-500 font-bold">You Logo</div>
            <div className="col-span-2 sm:grid grid-cols-4 items-center text-center justify-center w-full hidden max-w-5xl ">
                <span className="font-bold text-blue-600 font-sans cursor-pointer hover:text-blue-400">
                    <Link  to='/'>
                        Home
                    </Link>
                    
                </span>
                <Link  to='/about' className="font-bold text-blue-600 font-sans cursor-pointer hover:text-blue-400">
                    About Us
                </Link>
                <span className="font-bold text-blue-600 font-sans cursor-pointer hover:text-blue-400">Project</span>
                <span className="font-bold text-blue-600 font-sans cursor-pointer hover:text-blue-400">Content Me</span>
            </div>
            <div className="items-center flex justify-end  sm:col-span-2 gap-5">
                <div className="h-full flex items-center justify-center">
                    <FaSearch className=" text-slate-400 text-3xl"/>
                </div>
           
                <div className="w-10 h-5 flex-row space-y-2 cursor-pointer">
                    <div className="bg-slate-400 w-full h-1"></div>
                    <div className="bg-slate-400 w-full h-1"></div>
                    <div className="bg-slate-400 w-full h-1"></div>
                </div>
           
            </div>
        
        </div>
     
      
      </div>
    </>
  )
}
