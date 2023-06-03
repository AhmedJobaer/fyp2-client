// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const Electronic = () => {
    
//     const books = useLoaderData();
//     console.log(books);



   

//     return (
//         <div>
//             <div>
//                 <h1 className='text-center text-bold text-2xl mt-12 mb-4'>Available BOOK to Borrow</h1>
//                 <input type="text" placeholder="Search Your Need Item" className="input input-bordered mx-auto text-center input-primary w-1/2" />

//                 <div className='grid  place-items-center mt-10 md:grid-cols-3 lg:grid-cols-4'>
//                     {
//                         books.map(book => <BookCards
//                             key={book._id}
//                             book={book}
//                         ></BookCards>)
//                     }
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Electronic;