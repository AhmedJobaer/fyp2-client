import React from 'react';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    return (
        <div>
            <h3 className='text-3xl mb-5 mt-2'>My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Owner</th>
                            <th>Return</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="hover">
                            <th>1</th>
                            <td>Book 1</td>
                            <td>Asif Ahmed</td>
                            <td><input className='btn  text-white btn-primary' value="returned" type="submit" /></td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>1</th>
                            <td>Book 1</td>
                            <td>Asif Ahmed</td>
                            <td><input className='btn  text-white btn-primary' value="returned" type="submit" /></td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover">
                            <th>1</th>
                            <td>Book 1</td>
                            <td>Asif Ahmed</td>
                            <td><input className='btn  text-white btn-text-red-400' value="return" type="submit" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;