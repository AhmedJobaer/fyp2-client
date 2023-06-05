import React from 'react';
import { toast } from 'react-hot-toast';

const BTable = ({ row }) => {

    const accessToken = localStorage.getItem('accessToken');
    const id = row._id;
    console.log(row);
    console.log(id);
    console.log(row.itemId);
    //const itemId = row.itemId

    const canProduct = (itemId) => {

        const reItem = { itemId };
        console.log(reItem);
        fetch(`http://localhost:5000/api/return/${row._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'token': 'Bearer ' + accessToken
            },
            body: JSON.stringify(reItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log("return", data);
                toast('You have Successfully return the product.');

            })
    }


    console.log(row);


    return (
        <div>
            <div>
                <div className=" mt-1 shadow-md">
                    <table className="table   w-full ">

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
                                            <div className="font-bold">{row.ownerName}</div>
                                            <div className="text-sm opacity-50">hat@harry.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-serif'>
                                    {row.itemName}

                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.itemImg} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <th>

                                    <button onClick={() => canProduct(row.itemId)} className="btn border-none ml-2 text-white bg-red-500 btn-xs">return</button>
                                </th>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default BTable;