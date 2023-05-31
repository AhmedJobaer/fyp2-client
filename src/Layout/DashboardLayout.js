import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer mt-4 mb-4 shadow-xl shadow-primary drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side shadow-xl shadow-primary lg:w-[250px] lg:mr-10">
                    <label htmlFor="dashboard-drawer " className="drawer-overlay"></label>
                    <ul className="menu p-4 ml-4   w-52 bg-base-100 text-base-content">
                        <li><Link className=' hover:bg-primary  focus:outline-none focus:ring focus:ring-primary font-serif mb-3'>Add Item</Link></li>
                        <li><Link className='hover:bg-primary  focus:outline-none focus:ring focus:ring-primary font-serif mb-3'>Ask Item</Link></li>
                        <li><Link to='/dashboard/lent' className='hover:bg-primary  focus:outline-none focus:ring font-serif focus:ring-primary mb-3'>Borrowed</Link></li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;