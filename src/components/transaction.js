import React, { useState } from 'react';
import axios from 'axios';

const Transaction = () => {
  const [transactionReference, setTransactionReference] = useState('');
  const apiKey = 'YOUR_FLUTTERWAVE_API_KEY';
  const mobileMoneyProvider = 'YOUR_MOBILE_MONEY_PROVIDER'; // Replace with the correct mobile money provider for your region.

  const initiateMobileMoneyTransaction = async () => {
    try {
      const response = await axios.post(
        'https://api.flutterwave.com/v3/charges?type=mobile_money',
        {
          tx_ref: 'unique_transaction_reference',
          amount: 100, // Amount in your currency (e.g., 100 means 1 unit of your currency)
          currency: 'YOUR_CURRENCY_CODE',
          payment_type: mobileMoneyProvider,
          redirect_url: 'https://your-redirect-url.com',
          order_id: 'order_id', // Unique order ID
          phone_number: 'recipient_phone_number',
          email: 'recipient_email',
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        // Handle the successful response, typically, Flutterwave will provide transaction information for further processing.
        const responseData = response.data;
        setTransactionReference(responseData.data.tx_ref);
        // You can handle further processing here, e.g., updating your database or showing payment details to the user.
      } else {
        // Handle the error, log it, and show an error message to the user.
        console.error('Mobile money transaction failed with status code: ', response.status);
      }
    } catch (error) {
      // Handle network errors or other exceptions.
      console.error('Error initiating mobile money transaction:', error);
    }
  };

  return (
    <div>
      <h1>Mobile Money Transaction</h1>
      <button onClick={initiateMobileMoneyTransaction}>Initiate Mobile Money Transaction</button>
      {transactionReference && (
        <p>Transaction Reference: {transactionReference}</p>
      )}
    </div>
  );
};

export default Transaction;
