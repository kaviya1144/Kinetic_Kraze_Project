// import React, { useRef,useState } from 'react'
// import axios from 'axios'
// import '../css/Home.css'
// import NavBar from './Navbar'
// import { Box, Button, Card, CardContent, CardMedia, Container, IconButton, Link, Typography } from '@mui/material'
// import { BsChatHeartFill } from "react-icons/bs";
// import { useNavigate } from 'react-router-dom';
// import Footer from './Footer';
// const Home = () => {

//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [currentSubmenu, setCurrentSubmenu] = React.useState([]);

//   const handleRegisterClick = () => {
//         alert("You have clicked the register button!");
//       };
    
    
//       const scrollContainerRef = useRef(null);
    
//       const scrollLeft = () => {
//         if (scrollContainerRef.current) {
//           scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//         }
//       };
    
//       const scrollRight = () => {
//         if (scrollContainerRef.current) {
//           scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//         }
//       };

//       const handleMenuOpen = (event, submenu) => {
//         setAnchorEl(event.currentTarget);
//         setCurrentSubmenu(submenu);
//       };

//       const handleMenuClose = () => {
//         setAnchorEl(null);
//         setCurrentSubmenu([]);
//       };

//       const handleMenuItemClick = (path) => {
//         navigate(path);
//         handleMenuClose();
//       };

//       const [query, setQuery] = useState('');
//     const [response, setResponse] = useState('');

//     const handleInputChange = (event) => {
//         setQuery(event.target.value);
//     };
    
    
//   return (
//     <>
//     <div className='hero'>
//        <NavBar/>
//     <Container maxWidth="lg" sx={{ marginTop: 8 }}>
//           <Box sx={{ color: "white", textAlign: "center", padding: "50px 0",mt:"10rem" }}>
//             <Typography variant="h3" component="h1" sx={{fontFamily: "inherit"}} >
//             Your journey to fitness starts here <br/>Let’s make every day count
//             </Typography>
//             {/* <Typography variant="h5" component="p" sx={{ marginTop: 2, fontFamily: "fantasy" }}>
//               Register now for the marathon happening in Coimbatore. Don't miss
//               out on this exciting event!
//             </Typography> */}
//             <Button
//               variant="contained"
//               color="secondary"
//               sx={{ marginTop: 4 }}
//               // onClick={handleRegisterClick}
//               onClick={() => handleMenuItemClick('/registration')}
//             >
//               Register
//             </Button>
//             {/* <Box sx={{ marginTop: 4 }}>
//               <Link
//                 href="/searchevents"
//                 sx={{
//                   color: "white",
//                   fontSize: "1.2rem",
//                   textDecoration: "none",
//                 }}

//               >
//                 Click here for upcoming events
//               </Link>
//             </Box> */}
//           </Box>
//         </Container>
//          <div style={{ position: 'relative', height: '100vh' }}>
//       {/* Other nav elements */}
//       <IconButton
//         sx={{
//           position: 'fixed',
//           top: '85%', // Adjust as needed
//           right: '40px', // Adjust as needed
//           transform: 'translateY(-50%)'
//         }}
//         onClick={() => handleMenuItemClick('/chatbot')}
//       >
//         <BsChatHeartFill size={50} color="darkviolet" />
//       </IconButton>
   
//     </div>
//     <Footer/>
//     </div>
//     </>
//   )
// }

// export default Home

import React, { useRef, useState } from 'react';
import axios from 'axios';
import '../css/Home.css';
import NavBar from './Navbar';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { BsChatHeartFill } from "react-icons/bs";
import { useNavigate, Route, Routes } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentSubmenu, setCurrentSubmenu] = useState([]);

  const handleRegisterClick = () => {
    alert("You have clicked the register button!");
  };

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleMenuOpen = (event, submenu) => {
    setAnchorEl(event.currentTarget);
    setCurrentSubmenu(submenu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentSubmenu([]);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <>
      <div className='hero'>
        <NavBar/>
        <Container maxWidth="lg" sx={{ marginTop: 8 }}>
          <Box sx={{ color: "white", textAlign: "center", padding: "50px 0", mt: "10rem" }}>
            <Typography variant="h3" component="h1" sx={{ fontFamily: "inherit" }}>
              Your journey to fitness starts here <br />Let’s make every day count
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: 4 }}
              onClick={() => handleMenuItemClick('/registration')}
            >
              Register
            </Button>
          </Box>
        </Container>
        <div style={{ position: 'relative', height: '100vh' }}>
          <IconButton
            sx={{
              position: 'fixed',
              top: '85%',
              right: '40px',
              transform: 'translateY(-50%)'
            }}
            onClick={() => handleMenuItemClick('/chatbot')}
          >
            <BsChatHeartFill size={50} color="darkviolet" />
          </IconButton>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
