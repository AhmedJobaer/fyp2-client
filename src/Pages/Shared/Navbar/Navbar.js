import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import gem from '../../../assets/icons/gem.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }


    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>

        <li><Link to="/">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>

    </React.Fragment>

    return (
        <div>

            <div className='flex items-center mb-2 justify-between'>
                <h2 className='text-3xl ml-14 text-green-500 font-bold'>PIES</h2>
                <div className=' flex items-center  justify-center w-[140px] p-2 rounded-3xl bg-white mr-10 shadow-xl shadow-primary       '>
                    <img className=' h-[35px] mr-3 ' src="https://cdn-icons-png.flaticon.com/512/3530/3530860.png" alt="" />
                    <p className='text-2xl  font-bold text-green-500'>250</p>
                </div>
            </div>
            <div className="navbar font-serif bg-lime-700 rounded text-white justify-around">
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
                        <div className=" text-white font-bold   text-xl">
                            <label tabIndex={0}>All Categories</label>
                        </div>
                        <ul tabIndex={1} className="dropdown-content shadow-xl shadow-primary text-primary menu p-2  bg-base-100 rounded-box w-52">
                            <li><Link to="/categories-book">BOOK</Link></li>
                            <li><Link to="/categories-tools">TOOLS</Link></li>
                            <li><Link to="/categories-health">HEALTH</Link></li>
                            <li><Link to="/">KITCHEN</Link></li>
                            <li><Link to="/">ELECTRONIC</Link></li>
                            <li><Link to="/">HOME APPLIANCE</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center text-lg hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>

                </div>
                <div className="dropdown dropdown-end text-black">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {user?.email}
                                <span className="badge">Active</span>
                            </a>
                        </li>

                        {user?.uid ?
                            <>

                                <li> <button onClick={handleLogOut}>Sign Out</button></li>
                            </>

                            : <li><Link to="/login">Login</Link></li>}
                    </ul>
                </div>

                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div >
    );
};

export default Navbar;