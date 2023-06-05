import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>

            <div className="tabs font-semibold bg-lime-100 rounded-2xl  justify-around p-4 mb-14 mr-6">
                <Link to="/dashboard/lent" className="tab tab-lg rounded-3xl shadow-sm shadow-primary text-2xl font-serif  text-black hover:text-white  hover:bg-primary  focus:outline-none focus:ring focus:ring-primary  "> Borrowed </Link>
                {/* <Link to='/dashboard/sharedProduct' className="tab font-serif text-2xl tab-lg rounded-3xl shadow-sm shadow-primary text-black  hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary  "> Shared </Link> */}
                <Link to='/dashboard/requestedProduct' className="tab  font-serif tab-lg text-2xl rounded-3xl shadow-sm shadow-primary text-black  hover:bg-primary hover:text-white  focus:outline-none focus:ring focus:ring-primary  ">Requested</Link>
                <Link to='/dashboard/reviewProduct' className="tab font-serif tab-lg rounded-3xl shadow-sm text-2xl shadow-primary text-black  hover:bg-primary hover:text-white  focus:outline-none focus:ring focus:ring-primary  ">Review Request</Link>
            </div>

            <Outlet></Outlet>


        </div>
    );
};

export default Dashboard;