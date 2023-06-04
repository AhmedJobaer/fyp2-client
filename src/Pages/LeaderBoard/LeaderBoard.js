import React, { useEffect, useState } from 'react';

const LeaderBoard = () => {

    // const data = [
    //     { name: "Asif Ahmed", points: 350 },
    //     { name: "Shibbir Ahmad", points: 250 },
    //     { name: "Ehsanul Haque", points: 100 },
    //     { name: "Mamaun Hassan", points: 100 },
    //     { name: "Hassan Al Banna", points: 200 }
    // ];


    const [top, setTop] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/users/top/users')
            .then(res => res.json())
            .then(data => setTop(data))
    }, [])

    console.log(top);





    const sortedData = top.sort((a, b) => b.gdr - a.gdr);

    // Get the top three players
    const topThree = sortedData.slice(0, 3);


    return (
        <div className='mb-14'>
            <div>
                <h1 className="text-6xl text-green-600 mt-8 mb-8 font-lobster flex justify-center font-bold X ">Leader Board</h1>
            </div>
            <div className="  flex font-serif justify-center p-4">

                <div className=" shadow-2xl shadow-primary overflow-x-auto">
                    <table className="table  table-zebra">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Your Position</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>

                                <th>GDR Points</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody >
                            {/* row 1 */}
                            {
                                sortedData.map((player, index) =>
                                    <tr key={player.name}>

                                        <td >
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img className='bg-lime-200' src="https://cdn-icons-png.flaticon.com/512/2648/2648307.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{player.name}</div>
                                                </div>
                                                {index < 3 && <span className="indicator-item badge text-white bg-orange-500 border-none">Top</span>}

                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>


                                        <td>{player.gdr}</td>
                                        <td></td>
                                    </tr>
                                )
                            }

                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>


                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>

    );
};

export default LeaderBoard;