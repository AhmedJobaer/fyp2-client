import React, { useEffect, useState } from 'react';
import ReqTable from './ReqTable';

import noitem from '../../../assets/images/noItem.svg'

const RequestProduct = () => {

    const accessToken1 = localStorage.getItem('accessToken');

    const [requested, setRequested] = useState([])

    useEffect(() => {
        fetchData(accessToken1);
    }, [])



    function fetchData(accessToken) {
        const url = 'http://localhost:5000/api/myrequest/';

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
        // <div>

        //     {requested?.length > 0 ?
        //         <>
        //             <div>
        //                 {/* <div className="tabs font-semibold bg-lime-100 rounded-2xl  justify-around p-4 mb-14 mr-6">
        //         <Link to="/dashboard/lent" className="tab tab-lg rounded-3xl shadow-sm shadow-primary text-2xl font-serif  text-black hover:text-white  hover:bg-primary  focus:outline-none focus:ring focus:ring-primary  "> Borrowed </Link>
        //         <Link to='/dashboard/sharedProduct' className="tab font-serif text-2xl tab-lg rounded-3xl shadow-sm shadow-primary text-black  hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary  "> Shared </Link>
        //         <Link className="tab  font-serif tab-lg text-2xl rounded-3xl shadow-sm shadow-primary text-black  hover:bg-primary hover:text-white  focus:outline-none focus:ring focus:ring-primary  ">Requested</Link>
        //         <Link className="tab font-serif tab-lg rounded-3xl shadow-sm text-2xl shadow-primary text-black  hover:bg-primary hover:text-white  focus:outline-none focus:ring focus:ring-primary  ">Review Request</Link>
        //         </div> */}

        //                 <p className='text-5xl text-center  font-lobster font-bold  mt-7 mb-14'> Your <span className='text-green-500'>Requested</span> Items. </p>

        //                 <div className='overflow-x-auto'>
        //                     <table className='table w-full'>
        //                         {/* head */}
        //                         <thead>
        //                             <tr className='font-serif '>

        //                                 <th>Owner Name</th>
        //                                 <th>Item Name</th>
        //                                 <th >Picture</th>
        //                                 <th>Action</th>
        //                             </tr>
        //                         </thead>
        //                     </table>
        //                 </div>
        //                 {
        //                     requested.map(row => <ReqTable
        //                         key={row._id}
        //                         row={row}
        //                     ></ReqTable>)
        //                 }
        //             </div>
        //         </>

        //         :
        //         <div className=''>
        //             <h2 className='font-lobster text-6xl text-center font-bold'>Your Bag is <span className='text-green-500'>empty</span>!!</h2>
        //             <img className='w-2/3 mx-auto' src={noitem} alt="" />
        //         </div>
        //     }


        // </div>
        <div>
            {/* <div className="tabs font-semibold bg-lime-100 rounded-2xl  justify-around p-4 mb-14 mr-6">
                <Link to="/dashboard/lent" className="tab tab-lg rounded-3xl shadow-sm shadow-primary text-2xl font-serif  text-black hover:text-white  hover:bg-primary  focus:outline-none focus:ring focus:ring-primary  "> Borrowed </Link>
                <Link to='/dashboard/sharedProduct' className="tab font-serif text-2xl tab-lg rounded-3xl shadow-sm shadow-primary text-black  hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary  "> Shared </Link>
                <Link className="tab  font-serif tab-lg text-2xl rounded-3xl shadow-sm shadow-primary text-black  hover:bg-primary hover:text-white  focus:outline-none focus:ring focus:ring-primary  ">Requested</Link>
                <Link className="tab font-serif tab-lg rounded-3xl shadow-sm text-2xl shadow-primary text-black  hover:bg-primary hover:text-white  focus:outline-none focus:ring focus:ring-primary  ">Review Request</Link>
                </div> */}

            <p className='text-5xl text-center  font-lobster font-bold  mt-7 mb-14'> Your <span className='text-green-500'>Requested</span> Items. </p>

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
                requested.map(row => <ReqTable
                    key={row._id}
                    row={row}
                ></ReqTable>)
            }
        </div>
    );
};

export default RequestProduct;