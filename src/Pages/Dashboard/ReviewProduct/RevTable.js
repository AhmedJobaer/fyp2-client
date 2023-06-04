import React from 'react';
import { toast } from 'react-hot-toast';

const RevTable = ({ row }) => {
    const accessToken = localStorage.getItem('accessToken');


    console.log(row);


    const id = row._id;
    console.log(id);

    const revProduct = (borrower, owner, itemId) => {
        const ritem = { borrower, owner, itemId };
        console.log(ritem);
        fetch(`http://localhost:5000/api/bborrow/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //'token': 'Bearer ' + accessToken
            },
            body: JSON.stringify(ritem)
        })
            .then(res => res.json())
            .then(data => {
                //localStorage.setItem('gdrPoint', data.gdr);
                console.log("revP", data);

                toast('You have Successfully review the product.')
            })
    }


    const canProduct = () => {
        // console.log("fghdfjghdfj", itemName + description + itemImg + " " + owner.name);
        const citem = {};
        console.log(citem);
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
                toast('You have Successfully cancel the product.')
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
                                        <div className="font-bold">{row.borrower.name}</div>
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
                                <button onClick={() => { revProduct(row.borrower._id, row.owner, row.itemId) }} className="btn border-none text-white bg-green-500 btn-xs">accept</button>
                                <button onClick={() => canProduct()} className="btn border-none ml-2 text-white bg-red-500 btn-xs">cancel</button>
                            </th>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default RevTable;