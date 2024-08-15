// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';
// import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Box, Divider, Button } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete'; // Import Delete icon
// import RewardPage from './RewardPage';
// import { Link} from 'react-router-dom';

// const Cart = () => {
//   const { cart, removeFromCart } = useContext(CartContext);

//   const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.count), 0);
//   const totalQuantity = cart.reduce((acc, item) => acc + item.count, 0);

//   return (
//     <Container style={{marginTop:'4rem'}}>
//       <Typography variant="h4" gutterBottom style={{textAlign:'center'}}>Your Cart</Typography>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Box sx={{ flex: 2 }}>
//           <List>
//             {cart.length > 0 ? (
//               cart.map(item => (
//                 <ListItem key={item.id} className="cart-item">
//                   <ListItemAvatar>
//                     <Avatar src={item.images[0]} alt={item.name} className="cart-item-image" style={{height:'5rem',width:'auto'}}/>
//                   </ListItemAvatar>
//                   <Box className="cart-item-details">
//                     <ListItemText 
//                       primary={item.name}
//                       secondary={`Price: ₹${item.price} | Quantity: ${item.count}`}
//                      style={{marginLeft:'1rem'}} />
//                   </Box>
//                   <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)} className="cart-remove-icon">
//                     <DeleteIcon style={{color:'purple',marginLeft:''}}/>
//                   </IconButton>
//                 </ListItem>
//               ))
//             ) : (
//               <Typography>No items in cart</Typography>
//             )}
//           </List>
//         </Box>
//         <Box sx={{ flex: 1, paddingLeft: 2 }}>
//           <Divider sx={{ marginY: 2 }} />
//           <Box className="order-summary">
//             <Typography variant="h5">Order Summary</Typography>
//             <Typography>Total Quantity: {totalQuantity}</Typography>
//             <Typography variant="h6">Total Price: ₹{totalPrice}</Typography>
//             <Button variant='contained' style={{backgroundColor:'purple',width:'100%',marginTop:'1rem'}} component={Link} to='/payment'>Buy Now</Button>
//           </Box>
//         </Box>
//       </Box>
//       <RewardPage/>
//     </Container>
//   );
// };

// export default Cart;

import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Box, Divider, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; 
import RewardPage from './RewardPage';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from './Navbar';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.count), 0);
  const totalQuantity = cart.reduce((acc, item) => acc + item.count, 0);

  const handleBuyNow = () => {
    const user = JSON.parse(localStorage.getItem('user')); // Check if the user is logged in

    console.log(user);
    if (user) {
      // If logged in, proceed to the payment page
      navigate('/payment');
    } else {
      // If not logged in, redirect to the login page
      navigate('/login');
    }
  };

  return (
    <>
    <Navbar/>
    <Container style={{ marginTop: '4rem' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>Your Cart</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ flex: 2 }}>
          <List>
            {cart.length > 0 ? (
              cart.map(item => (
                <ListItem key={item.id} className="cart-item">
                  <ListItemAvatar>
                    <Avatar src={item.images[0]} alt={item.name} className="cart-item-image" style={{ height: '5rem', width: 'auto' }} />
                  </ListItemAvatar>
                  <Box className="cart-item-details">
                    <ListItemText 
                      primary={item.name}
                      secondary={`Price: ₹${item.price} | Quantity: ${item.count}`}
                      style={{ marginLeft: '1rem' }} />
                  </Box>
                  <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)} className="cart-remove-icon">
                    <DeleteIcon style={{ color: 'purple' }} />
                  </IconButton>
                </ListItem>
              ))
            ) : (
              <Typography>No items in cart</Typography>
            )}
          </List>
        </Box>
        <Box sx={{ flex: 1, paddingLeft: 2 }}>
          <Divider sx={{ marginY: 2 }} />
          <Box className="order-summary">
            <Typography variant="h5">Order Summary</Typography>
            <Typography>Total Quantity: {totalQuantity}</Typography>
            <Typography variant="h6">Total Price: ₹{totalPrice}</Typography>
            <Button 
              variant='contained' 
              style={{ backgroundColor: 'purple', width: '100%', marginTop: '1rem' }}
              onClick={handleBuyNow} // Use the handleBuyNow function
            >
              Buy Now
            </Button>
          </Box>
        </Box>
      </Box>
      <RewardPage />
    </Container>
    </>
  );
};

export default Cart;
// import React, { useContext, useEffect } from 'react';
// import { CartContext } from './CartContext';
// import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Box, Divider, Button } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete'; 
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';
// import RewardPage from './RewardPage';

// const Cart = () => {
//   const { cart, removeFromCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (!user) {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.count), 0);
//   const totalQuantity = cart.reduce((acc, item) => acc + item.count, 0);

//   const handleBuyNow = () => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user) {
//       navigate('/payment');
//     } else {
//       navigate('/login');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Container style={{ marginTop: '4rem' }}>
//         <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>Your Cart</Typography>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Box sx={{ flex: 2 }}>
//             <List>
//               {cart.length > 0 ? (
//                 cart.map(item => (
//                   <ListItem key={item.id} className="cart-item">
//                     <ListItemAvatar>
//                       <Avatar src={item.images[0]} alt={item.name} className="cart-item-image" style={{ height: '5rem', width: 'auto' }} />
//                     </ListItemAvatar>
//                     <Box className="cart-item-details">
//                       <ListItemText 
//                         primary={item.name}
//                         secondary={`Price: ₹${item.price} | Quantity: ${item.count}`}
//                         style={{ marginLeft: '1rem' }} 
//                       />
//                     </Box>
//                     <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)} className="cart-remove-icon">
//                       <DeleteIcon style={{ color: 'purple' }} />
//                     </IconButton>
//                   </ListItem>
//                 ))
//               ) : (
//                 <Typography>No items in cart</Typography>
//               )}
//             </List>
//           </Box>
//           <Box sx={{ flex: 1, paddingLeft: 2 }}>
//             <Divider sx={{ marginY: 2 }} />
//             <Box className="order-summary">
//               <Typography variant="h5">Order Summary</Typography>
//               <Typography>Total Quantity: {totalQuantity}</Typography>
//               <Typography variant="h6">Total Price: ₹{totalPrice}</Typography>
//               <Button 
//                 variant='contained' 
//                 style={{ backgroundColor: 'purple', width: '100%', marginTop: '1rem' }}
//                 onClick={handleBuyNow}
//               >
//                 Buy Now
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//         <RewardPage/>
//       </Container>
//     </>
//   );
// };

// export default Cart;
