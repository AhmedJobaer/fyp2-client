import React from 'react';
import { Link } from 'react-router-dom';

const Lent = () => {
    return (
        <div>
            <p className='text-5xl text-center  font-lobster font-bold  mt-7 mb-14'> Your <span className='text-green-500'>Borrowed</span> Items. </p>
            <div className=" mt-6 mr-4 shadow-xl">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr className='font-serif'>

                            <th>Owner Name</th>
                            <th>Item Name</th>
                            <th>Picture</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">hat@harry.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className='font-serif'>
                                Book 1

                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://realtoughcandy.com/wp-content/uploads/2021/03/introduction-to-computer-science-books-cover.jpg" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <th>
                                <button className="btn border-none text-white bg-green-500 btn-xs">Return</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold ">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">hat@harry.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className='font-serif'>
                                Book 1

                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://realtoughcandy.com/wp-content/uploads/2021/03/introduction-to-computer-science-books-cover.jpg" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <th>
                                <button className="btn text-white border-none bg-green-500 btn-xs">Return</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">hat@harry.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className='font-serif'>
                                Book 1

                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://realtoughcandy.com/wp-content/uploads/2021/03/introduction-to-computer-science-books-cover.jpg" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <th>
                                <button className="btn text-white border-none bg-green-500 btn-xs">Return</button>
                            </th>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Lent;