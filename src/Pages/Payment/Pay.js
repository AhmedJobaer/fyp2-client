import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Pay = () => {


    const [stripeToken, setStripeToken] = useState(null);


    const onToken = (token) => {
        console.log(token);
        setStripeToken(token);
    }

    // useEffect(() => {
    //     const makeRequest = async () => {
    //         try {
    //             const res = await axios.post('http://localhost:5000/api/checkout/payment',
    //                 {
    //                     tokenId: stripeToken.id,
    //                     amount: 1000,
    //                 });
    //             console.log(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     stripeToken && makeRequest()
    // }, [stripeToken])

    return (
        <div>
            <StripeCheckout name="PIES"
                billingAddress
                shippingAddress
                description='Your total is RM 10 for 100 GDR points'
                amount={1000}
                token={onToken}
                stripeKey='pk_test_51NFElEAfXSSMoQMY77QhEjIiqyS9isuoBFeVFtoNoXNWkNOOmiGaxvxOXvcbWOAVG6eTeEgifBLFncGgV86pjKSw008GID1MiK'
            >
                <h2 className="text-6xl text-green-600 mt-8 mb-8 font-lobster flex justify-center font-bold X "> Payment For GDR Points</h2>
                <h2 className=' font-sans text-center text-2xl'>Please Pay RM 10 for 1000 GDR points</h2>
                <div className='flex justify-center'>
                    <button className=' btn btn-primary text-white mt-10 mb-10'>Pay Now</button>
                </div>
            </StripeCheckout>

        </div>
    );
};

export default Pay;