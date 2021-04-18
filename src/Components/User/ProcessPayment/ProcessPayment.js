import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeC3HHb53UFvkh98iOillImBKhJAWDpTrgWoECt7suaJcyRzxdrbiTgj6Cj8RMZAIzGtvWl8iLz3JCpvBbJXnk200noBOGkIN');

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
        <PaymentCard handlePayment={handlePayment}></PaymentCard>
    </Elements>
  );
};
export default ProcessPayment;