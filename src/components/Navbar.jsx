import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className="w-full bg-slate-900 border-b border-slate-800 shadow-lg">
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="h-16 flex items-center justify-between">

                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="flex items-center gap-2"
                    >
                        <div className="
                            w-25 h-25
                            flex items-center justify-center
                            rounded-lg
                            text-white
                            font-bold
                            text-lg
                        ">
                          <img
                            src={logo}
                            alt="PasteSaver Logo"
                            className="
                                h-30
                                w-30
                                object-contain
                            "
                        />
                        </div> 
                    </NavLink>


                    {/* Navigation Links */}
                    <div className="flex items-center gap-2">

                        {/* Home */}
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg text-sm font-medium
                                transition-all duration-200
                                ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                                }`
                            }
                        >
                            Home
                        </NavLink>


                        {/* Paste */}
                        <NavLink
                            to="/pastes"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg text-sm font-medium
                                transition-all duration-200
                                ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                                }`
                            }
                        >
                            Paste
                        </NavLink>

                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navbar