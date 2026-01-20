import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Activity, TrendingUp, Trophy, User, Users } from 'lucide-react'

const Navbar = () => {
  const navigate = useNavigate();

  return (


    <nav className='fixed top-0 left-0 w-full py-5 bg-[#1a1f2b] border-b border-gray-400/20 '>
      {/* Navbar */}
      <div className="flex items-center justify-center md:justify-between mx-auto md:w-3/4 lg:w-1/2">
        <div className='flex items-center gap-3'>
          <img
            className='w-5 h-5 scale-500  mr-10 md:mr-5 cursor-pointer'
            src="/logo.png"
            alt="logo"
            onClick={() => navigate('/')} />
          <div className=' md:block text-nowrap hidden'>
            <h1 className='font-bold text-xl '>NBA Go</h1>
            <span className='text-sm text-gray-500'>Stats & Scores</span>
          </div>
        </div>
        <ul className=' flex ml-6 text-gray-400 items-center gap-2 md:flex'>
          <li>
            <NavLink
              to="/scores"
              className={({ isActive }) =>
                `flex items-center gap-2 py-2 px-3 rounded-xl transition-colors ease-out ${isActive ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-white/20 hover:text-white"}`
              }
            >
              <Activity className="w-7 h-7 md:w-5 md:h-5" />
              <span className="hidden md:inline">Scores</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/standings"
              className={({ isActive }) =>
                `flex items-center gap-2 py-2 px-3 rounded-xl transition-colors ease-out ${isActive ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-white/20 hover:text-white"}`
              }
            >
              <Trophy className="w-7 h-7 md:w-5 md:h-5" />
              <span className="hidden md:inline">Standings</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center gap-2 py-2 px-3 rounded-xl transition-colors ease-out ${isActive ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-white/20 hover:text-white"}`
              }
            >
              <TrendingUp className="w-7 h-7 md:w-5 md:h-5" />
              <span className="hidden md:inline">Stats</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                `flex items-center gap-2 py-2 px-3 rounded-xl transition-colors ease-out ${isActive ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-white/20 hover:text-white"}`
              }
            >
              <User className="w-7 h-7 md:w-5 md:h-5" />
              <span className="hidden md:inline">Teams</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar