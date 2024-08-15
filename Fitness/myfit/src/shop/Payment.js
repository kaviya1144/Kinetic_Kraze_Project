import React, {useState,useContext, useEffect } from 'react';
import { Container, Typography, Button, Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField} from '@mui/material';
import { useCart } from './CartContext';
import Layout from './Layout';
import './Payment.css';
import { AddressContext } from './AddressContext';
import {useNavigate} from 'react-router-dom';
import PayPalPayment from './PayPalPayment';
// import Product from '../assets/images/shopping.jpg';

const Payment = () => {
  const { cart, totalPrice } = useCart();
  const { address } = useContext(AddressContext);
  const [paymentMethod, setPaymentMethod] = React.useState('creditCard');
  const [discountCode, setDiscountCode] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice);
  const navigate = useNavigate();

  useEffect(() => {
    const savedDiscountCode = localStorage.getItem('discountCode');
    if (savedDiscountCode) {
      setDiscountCode(savedDiscountCode);
      applyDiscount(savedDiscountCode);
    }
  }, []);

  const navigateToShippingForm = () => {
    navigate('/shipping');
  };
  

  // const applyDiscount = () => {
  //   const discount = discountCode === 'SAVE10' ? 0.1 : 0; // 10% discount
  //   const newPrice = totalPrice * (1 - discount);
  //   setDiscountedPrice(newPrice);
  // };
  const applyDiscount = (code) => {
    let discount = 0;
    if (code === 'DISCOUNT10') {
      discount = 0.1; // 10% discount
    } else if (code === 'DISCOUNT50') {
      discount = 0.5; // 50% discount
    }
    const newPrice = totalPrice * (1 - discount);
    setDiscountedPrice(newPrice);
  };

  const [cardDetails, setCardDetails] = React.useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  
  const handleError=(error)=>{
    console.error('PayPal Payment Error: ',error);
  };

  const handleCancel=()=>{
    console.log('Transaction cancelled');
  };

  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    });
  };

  const handlePlaceOrder = () => {
    console.log('Order placed with details:', { paymentMethod, cardDetails, cart });
  };

  return (
    <Layout>
      <Container style={{ marginTop: '4rem' }} className='payment-page'>
        <Grid>
              <Typography variant="h5"  gutterBottom style={{fontWeight:'bold'}}>Order Summary</Typography>
            <Grid elevation={3} >
                  <Typography variant="h6" style={{marginTop:'1rem'}}>Cart Items:</Typography>
              {cart.map(item => (
                <Box key={item.id} style={{ marginBottom: '0.5rem' }}>
                  <Typography variant="body1">{item.name} - ₹{item.price} x {item.count}</Typography>
                </Box>
              ))}
              <Typography variant="h6" >Total Price: ₹{totalPrice.toFixed(2)}</Typography>
              <Typography variant="h6" style={{marginBottom:'2rem'}}>Discounted Price: ₹{discountedPrice.toFixed(2)}</Typography>
            </Grid>
            <Typography variant="h6" gutterBottom style={{fontWeight:'bold'}}>Apply Discount</Typography>
            <TextField
              label="Discount Code"
              variant="outlined"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <Button
              variant="contained"
              
              onClick={applyDiscount}
              className='apply-button' style={{marginTop:'0.5rem',backgroundColor:'purple',marginLeft:'1rem'}}
            >
              Apply
            </Button>
            <Grid item xs={12} md={6}>
            {/* <ShippingAddress onSubmit={handleShippingAddressSubmit} /> */}
            <button onClick={navigateToShippingForm} style={{display: 'block', width: '25%',marginTop:'2rem',
    padding: '1em',
    backgroundColor: 'purple',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '1em',marginTop:'1rem'}}>Go to Shipping Form</button>
            {address && (
        <div className="address-summary">
          <h4 style={{marginTop:'1rem',fontWeight:'bold'}}>Shipping Address Summary</h4>
          <p>{address.fullName}</p>
          <p>{address.addressLine1} {address.addressLine2}, {address.city}</p>
          <p> {address.state} - {address.zip}</p>
          <p>{address.country}</p>
          <p><strong>Phone Number:</strong> {address.phoneNumber}</p>
        </div>
      )}
      {/* <div className="image-container">
        <img src={Product} alt="Product" />
      </div> */}
            </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className='payment-header'>Payment Method</Typography>
            <FormControl fullWidth style={{ marginTop: '20px', marginBottom: '20px' }}>
              <InputLabel id="payment-method-label">Select Payment Method</InputLabel>
              <Select
                labelId="payment-method-label"
                id="payment-method"
                value={paymentMethod}
                label="Select Payment Method"
                onChange={handlePaymentMethodChange}
              >
                <MenuItem value="creditCard">Credit Card</MenuItem>
                <MenuItem value="debitCard">Debit Card</MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
              </Select>
            </FormControl>
            {paymentMethod === 'creditCard' && (
              <Box>
                <TextField
                  fullWidth
                  label="Card Number"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange}
                  style={{ marginBottom: '20px' }}
                />
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                  <TextField
                    label="Expiry Date"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleCardDetailsChange}
                    style={{ marginRight: '10px' }}
                  />
                  <TextField
                    label="CVV"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardDetailsChange}
                  />
                </Box>
              </Box>
            )}
            {paymentMethod === 'paypal' && (
              <Grid item xs={12} md={6}>
              <PayPalPayment totalPrice={totalPrice} onError={handleError} onCancel={handleCancel} />
            </Grid>
            )}
            <Button variant="contained" onClick={handlePlaceOrder} style={{ marginTop: '20px', backgroundColor: 'purple', width: '100%' }}>
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Payment;