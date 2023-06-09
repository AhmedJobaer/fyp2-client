import React from 'react';
import { toast } from 'react-hot-toast';

const ReqTable = ({ row }) => {




    const accessToken = localStorage.getItem('accessToken');
    const id = row._id;
    console.log(id);

    const canProduct = () => {
        // console.log("fghdfjghdfj", itemName + description + itemImg + " " + owner.name);
        //const citem = {};
        //console.log(citem);
        fetch(`http://localhost:5000/api/makeavailabe/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'token': 'Bearer ' + accessToken
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log("borrP", data);
                toast('You have Successfully cancel your request for the product.')
                //setCreatedUserEmail(email);
            })
    }
    return (
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
                                <div className="badge pb-3 pt-2 badge-primary badge-outline">...pending</div>
                                <button onClick={() => canProduct()} className="btn border-none ml-2 text-white bg-red-500 btn-xs">cancel</button>
                            </th>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ReqTable;