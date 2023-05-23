import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Appointment</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/login">Login</Link></li>
    </React.Fragment>

    return (
        <div>


            <div className="navbar bg-secondary text-white justify-around">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn text-white btn-primary  text-xl">ALL CATEGORIES</label>
                        <ul tabIndex={0} className="dropdown-content shadow-xl shadow-primary text-primary menu p-2  bg-base-100 rounded-box w-52">
                            <li><Link to="/categories-book">BOOK</Link></li>
                            <li><Link to="/categories-tools">TOOLS</Link></li>
                            <li><Link to="/categories-health">HEALTH</Link></li>
                            <li><Link to="/">KITCHEN</Link></li>
                            <li><Link to="/">ELECTRONIC</Link></li>
                            <li><Link to="/">HOME APPLIANCE</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Navbar;