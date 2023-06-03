import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReqTable from '../RequestedProduct/ReqTable';
import BTable from './BTable';

const Lent = () => {


    const accessToken1 = localStorage.getItem('accessToken');

    const [requested, setRequested] = useState([])

    useEffect(() => {
        fetchData(accessToken1);
    }, [])



    function fetchData(accessToken) {
        const url = 'http://localhost:5000/api/myborrowed/';

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': 'Bearer ' + accessToken
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);
                setRequested(data);
                // Handle the fetched data here
            })
            .catch(error => {
                console.error(error);
            });
    }

    //console.log(requested);


    return (
        <div>
            {/* <div className="tabs font-semibold bg-lime-100 rounded-2xl  justify-around p-4 mb-14 mr-6">
                <Link to="/dashboard/lent" className="tab tab-lg rounded-3xl shadow-sm shadow-primary text-2xl font-serif  text-black hover:text-white  hover:bg-primary  focus:outline-none focus:ring focus:ring-primary  "> Borrowed </Link>
                <Link to='/dashboard/sharedProduct' className="tab font-serif text-2xl tab-lg rounded-3xl shadow-sm shadow-primary text-black  hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary  "> Shared </Link>
                <Link className="tab  font-serif tab-lg text-2xl rounded-3xl shadow-sm shadow-primary text-black  hover:bg-primary hover:text-white  focus:outline-none focus:ring focus:ring-primary  ">Requested</Link>
                <Link className="tab font-serif tab-lg rounded-3xl shadow-sm text-2xl shadow-primary text-black  hover:bg-primary hover:text-white  focus:outline-none focus:ring focus:ring-primary  ">Review Request</Link>
                </div> */}
            <p className='text-5xl text-center  font-lobster font-bold  mt-7 mb-14'> Your <span className='text-green-500'>Borrowed</span> Items. </p>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    {/* head */}
                    <thead>
                        <tr className='font-serif '>

                            <th>Owner Name</th>
                            <th>Item Name</th>
                            <th >Picture</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
            </div>
            {
                requested.map(row => <BTable
                    key={row._id}
                    row={row}
                >

                </BTable>)
            }
        </div>
    );
};

export default Lent;