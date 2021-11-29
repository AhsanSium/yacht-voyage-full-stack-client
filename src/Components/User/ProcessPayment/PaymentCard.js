// import React from 'react';

// const PaymentCard = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default PaymentCard;

import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const PaymentCard = ({handlePayment}) => {

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      
      return;
    }

    
    const cardElement = elements.getElement(CardElement);

    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentSuccess(null);  
      setPaymentError(error.message);
    } else {
        setPaymentError(null);
        setPaymentSuccess(paymentMethod.id);
      //console.log('[PaymentMethod]', paymentMethod);
        handlePayment(paymentMethod.id);
    }
  };

  return (
      <div>
        <form onSubmit={handleSubmit}>
        < CardElement  className="form-control bg-info bg-gradient" />
        <button className="btn btn-success p-2 m-2" type="submit" disabled={!stripe}>
            Pay Now
        </button>
        </form>
        {
            paymentError &&  <p className='text-danger'>{paymentError}</p>
        }
        {
            paymentSuccess &&  <p className='text-success'>Payment Completed</p>
        }

      </div>
  );
};
export default PaymentCard;