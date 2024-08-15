// import React, { useContext, useEffect, useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import JoinIcon from '@mui/icons-material/GroupAdd';
// import { Box } from '@mui/material';
// import logo from '../assets/images/logo1.png';
// import { useNavigate } from 'react-router-dom';
// import { PersonFill } from 'react-bootstrap-icons';
// import AuthContext from '../context/AuthContext';

// const menuItems = [
//   {
//     label: 'Workouts',
//     submenu: ['workout']
//   },
//   {
//     label: 'Store',
//     submenu: ['Supplements', 'Equipment'],
//   },
//   {
//     label: 'About',
//     submenu: ['About us', 'Why us?'],
//   }
// ];

// const NavBar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [currentSubmenu, setCurrentSubmenu] = useState([]);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [navBackground, setNavBackground] = useState('transparent');
//   const [navTextColor, setNavTextColor] = useState('white');
//   const [navColor, setNavColor] = useState('white');
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       const show = window.scrollY > 50;
//       setNavBackground(show ? 'white' : 'transparent');
//       setNavTextColor(show ? 'black' : 'white');
//       setNavColor(show ? 'black' : 'white' );
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleMenuOpen = (event, submenu) => {
//     setAnchorEl(event.currentTarget);
//     setCurrentSubmenu(submenu);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setCurrentSubmenu([]);
//   };

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleMenuItemClick = (path) => {
//     navigate(path);
//     handleMenuClose();
//   };

//   const handleUserIconClick = () => {
//     if (user) {
//       console.log(user);
//       navigate(`/profile/${user.userId}`);
//     } else {
//       navigate('/login');
//     }
//   };

//   return (
//     <div>
//       <AppBar position="fixed" sx={{ backgroundColor: navBackground, color: navTextColor }}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2, ml: 4 }}>
//             <img src="https://img.freepik.com/free-vector/gradient-gym-page-linkedin-profile-picture_742173-11442.jpg?t=st=1721897230~exp=1721900830~hmac=ccf5482db677e982247255862244e61a146e2156d2a820f092b0112355444862&w=740" alt="Logo" style={{ height: '75px', width: '75px' }} onClick={() => handleMenuItemClick('/')} />
//           </IconButton>
          
//           {/* Menu items on the right */}
//           <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
//             {menuItems.map((menuItem) => (
//               <Box key={menuItem.label} sx={{ display: 'inline-block', ml: 2 }}>
//                 <Button
//                   aria-controls="simple-menu"
//                   aria-haspopup="true"
//                   onClick={(e) => handleMenuOpen(e, menuItem.submenu)}
//                   onMouseEnter={(e) => handleMenuOpen(e, menuItem.submenu)}
//                   color="inherit"
//                   sx={{ color: navTextColor }}
//                 >
//                   {menuItem.label}
//                 </Button>
//                 <Menu
//                   id="simple-menu"
//                   anchorEl={anchorEl}
//                   open={Boolean(anchorEl) && currentSubmenu === menuItem.submenu}
//                   onClose={handleMenuClose}
//                   MenuListProps={{ onMouseLeave: handleMenuClose }}
//                 >
//                   {currentSubmenu.map((submenuItem) => (
//                     <MenuItem key={submenuItem} onClick={() => handleMenuItemClick(`/${menuItem.label.toLowerCase()}/${submenuItem.toLowerCase().replace(' ', '-')}`)}>
//                       {submenuItem}
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </Box>
//             ))}
//             <Button
//               variant="contained"
//               color="secondary"
//               startIcon={<JoinIcon />}
//               sx={{ ml: 2, color: navTextColor }}
//               onClick={() => handleMenuItemClick('/register')}
//             >
//               Join
//             </Button>
//             <Button sx={{backgroundColor:'transparent',color:navColor}} onClick={handleUserIconClick}><PersonFill/></Button>
//           </Box>
          
//           {/* Menu icon for mobile view */}
//           <Box sx={{ display: { xs: 'block', md: 'none' } }}>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="end"
//               onClick={handleDrawerToggle}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={handleDrawerToggle}
//         sx={{ display: { xs: 'block', md: 'none' } }}
//       >
//         <List>
//           {menuItems.map((menuItem) => (
//             <div key={menuItem.label}>
//               <ListItem button onClick={() => handleMenuItemClick(`/${menuItem.label.toLowerCase()}`)}>
//                 <ListItemText primary={menuItem.label} sx={{ color: 'black' }} />
//               </ListItem>
//               {menuItem.submenu.map((submenuItem) => (
//                 <ListItem key={submenuItem} button sx={{ pl: 4 }} onClick={() => handleMenuItemClick(`/${menuItem.label.toLowerCase()}/${submenuItem.toLowerCase().replace(' ', '-')}`)}>
//                   <ListItemText primary={submenuItem} sx={{ color: 'black' }} />
//                 </ListItem>
//               ))}
//             </div>
//           ))}
//           <ListItem button onClick={() => handleMenuItemClick('/register')}>
//             <ListItemText primary="Join" sx={{ color: 'black' }} />
//           </ListItem>
//         </List>
//       </Drawer>
//     </div>
//   );
// };

// export default NavBar;

// import React, { useContext, useEffect, useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import JoinIcon from '@mui/icons-material/GroupAdd';
// import { Box } from '@mui/material';
// import logo from '../assets/images/logo1.png';
// import { useNavigate } from 'react-router-dom';
// import { PersonFill } from 'react-bootstrap-icons';
// import AuthContext from '../context/AuthContext';

// const menuItems = [
//   {
//     label: 'Workouts',
//     submenu: ['workout']
//   },
//   {
//     label: 'Store',
//     submenu: ['Supplements', 'Equipment'],
//   },
//   {
//     label: 'About',
//     submenu: ['About us', 'Why us?'],
//   }
// ];

// const NavBar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [currentSubmenu, setCurrentSubmenu] = useState([]);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [navBackground, setNavBackground] = useState('transparent');
//   const [navTextColor, setNavTextColor] = useState('white');
//   const [navColor, setNavColor] = useState('white');
//   const [menuAnchorEl, setMenuAnchorEl] = useState(null); // Anchor for the profile menu
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       const show = window.scrollY > 50;
//       setNavBackground(show ? 'white' : 'transparent');
//       setNavTextColor(show ? 'black' : 'white');
//       setNavColor(show ? 'black' : 'white' );
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleMenuOpen = (event, submenu) => {
//     setAnchorEl(event.currentTarget);
//     setCurrentSubmenu(submenu);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setCurrentSubmenu([]);
//   };

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleMenuItemClick = (path) => {
//     navigate(path);
//     handleMenuClose();
//   };

//   const handleUserIconClick = (event) => {
//     setMenuAnchorEl(event.currentTarget); // Open profile menu
//   };

//   const handleProfileClick = () => {
//     if (user) {
//       navigate(`/profile/${user.userId}`);
//     } else {
//       navigate('/login');
//     }
//     setMenuAnchorEl(null); // Close profile menu
//   };

//   const handleLogoutClick = () => {
//     logout(); // Call logout function from AuthContext
//     navigate('/login'); // Redirect to login page after logout
//     setMenuAnchorEl(null); // Close profile menu
//   };

//   return (
//     <div>
//       <AppBar position="fixed" sx={{ backgroundColor: navBackground, color: navTextColor }}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2, ml: 4 }}>
//             <img src="https://img.freepik.com/free-vector/gradient-gym-page-linkedin-profile-picture_742173-11442.jpg?t=st=1721897230~exp=1721900830~hmac=ccf5482db677e982247255862244e61a146e2156d2a820f092b0112355444862&w=740" alt="Logo" style={{ height: '75px', width: '75px' }} onClick={() => handleMenuItemClick('/')} />
//           </IconButton>
          
//           {/* Menu items on the right */}
//           <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
//             {menuItems.map((menuItem) => (
//               <Box key={menuItem.label} sx={{ display: 'inline-block', ml: 2 }}>
//                 <Button
//                   aria-controls="simple-menu"
//                   aria-haspopup="true"
//                   onClick={(e) => handleMenuOpen(e, menuItem.submenu)}
//                   onMouseEnter={(e) => handleMenuOpen(e, menuItem.submenu)}
//                   color="inherit"
//                   sx={{ color: navTextColor }}
//                 >
//                   {menuItem.label}
//                 </Button>
//                 <Menu
//                   id="simple-menu"
//                   anchorEl={anchorEl}
//                   open={Boolean(anchorEl) && currentSubmenu === menuItem.submenu}
//                   onClose={handleMenuClose}
//                   MenuListProps={{ onMouseLeave: handleMenuClose }}
//                 >
//                   {currentSubmenu.map((submenuItem) => (
//                     <MenuItem key={submenuItem} onClick={() => handleMenuItemClick(`/${menuItem.label.toLowerCase()}/${submenuItem.toLowerCase().replace(' ', '-')}`)}>
//                       {submenuItem}
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </Box>
//             ))}
//             <Button
//               variant="contained"
//               color="secondary"
//               startIcon={<JoinIcon />}
//               sx={{ ml: 2, color: navTextColor }}
//               onClick={() => handleMenuItemClick('/register')}
//             >
//               Join
//             </Button>
//             <IconButton sx={{ backgroundColor: 'transparent', color: navColor }} onClick={handleUserIconClick}>
//               <PersonFill />
//             </IconButton>
//             {/* Profile Menu */}
//             <Menu
//               anchorEl={menuAnchorEl}
//               open={Boolean(menuAnchorEl)}
//               onClose={() => setMenuAnchorEl(null)}
//               anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//               transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             >
//               <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
//               <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
//             </Menu>
//           </Box>
          
//           {/* Menu icon for mobile view */}
//           <Box sx={{ display: { xs: 'block', md: 'none' } }}>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="end"
//               onClick={handleDrawerToggle}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={handleDrawerToggle}
//         sx={{ display: { xs: 'block', md: 'none' } }}
//       >
//         <List>
//           {menuItems.map((menuItem) => (
//             <div key={menuItem.label}>
//               <ListItem button onClick={() => handleMenuItemClick(`/${menuItem.label.toLowerCase()}`)}>
//                 <ListItemText primary={menuItem.label} sx={{ color: 'black' }} />
//               </ListItem>
//               {menuItem.submenu.map((submenuItem) => (
//                 <ListItem key={submenuItem} button sx={{ pl: 4 }} onClick={() => handleMenuItemClick(`/${menuItem.label.toLowerCase()}/${submenuItem.toLowerCase().replace(' ', '-')}`)}>
//                   <ListItemText primary={submenuItem} sx={{ color: 'black' }} />
//                 </ListItem>
//               ))}
//             </div>
//           ))}
//           <ListItem button onClick={() => handleMenuItemClick('/register')}>
//             <ListItemText primary="Join" sx={{ color: 'black' }} />
//           </ListItem>
//         </List>
//       </Drawer>
//     </div>
//   );
// };

// export default NavBar;

import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import JoinIcon from '@mui/icons-material/GroupAdd';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PersonFill } from 'react-bootstrap-icons';
import AuthContext from '../context/AuthContext';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navBackground, setNavBackground] = useState('transparent');
  const [navTextColor, setNavTextColor] = useState('white');
  const [navColor, setNavColor] = useState('white');
  const [menuAnchorEl, setMenuAnchorEl] = useState(null); // Anchor for the profile menu
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      setNavBackground(show ? 'white' : 'transparent');
      setNavTextColor(show ? 'black' : 'white');
      setNavColor(show ? 'black' : 'white');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  const handleUserIconClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleProfileClick = () => {
    if (user) {
      navigate(`/profile/${user.userId}`);
    } else {
      navigate('/login');
    }
    setMenuAnchorEl(null); // Close profile menu
  };

  const handleLogoutClick = () => {
    logout(); // Call logout function from AuthContext
    navigate('/login'); // Redirect to login page after logout
    setMenuAnchorEl(null); // Close profile menu
  };

  

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: navBackground, color: navTextColor }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2, ml: 4 }}>
            <img src="https://img.freepik.com/free-vector/gradient-gym-page-linkedin-profile-picture_742173-11442.jpg?t=st=1721897230~exp=1721900830~hmac=ccf5482db677e982247255862244e61a146e2156d2a820f092b0112355444862&w=740" alt="Logo" style={{ height: '75px', width: '75px' }} onClick={() => handleMenuItemClick('/')} />
          </IconButton>

          {/* Menu items on the right */}
          <Box sx={{ display: { xs: 'none', md: 'flex' , gap: '0.5cm' }, flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button
              color="inherit"
              sx={{ color: navTextColor }}
              onClick={() => handleMenuItemClick('/workout')}
            >
              Workouts
            </Button>
            <Button
              color="inherit"
              sx={{ color: navTextColor }}
              onClick={() => handleMenuItemClick('/store')}
            >
              Store
            </Button>
            <Button
              color="inherit"
              sx={{ color: navTextColor }}
              onClick={() => handleMenuItemClick('/about-us')}
            >
              About
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<JoinIcon />}
              sx={{ ml: 2, color: navTextColor }}
              onClick={() => handleMenuItemClick('/register')}
            >
              Join
            </Button>
            <IconButton sx={{ backgroundColor: 'transparent', color: navColor }}  onMouseEnter={handleUserIconClick}>
              <PersonFill />
            </IconButton>
            {/* Profile Menu */}
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={() => setMenuAnchorEl(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              PaperProps={{
                elevation: 4,
                sx: {
                  mt: 1,
                  minWidth: 110,
                  borderRadius: 1,
                },
              }}
            >
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>
          </Box>

          {/* Menu icon for mobile view */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <List>
          <ListItem button onClick={() => handleMenuItemClick('/workout')}>
            <ListItemText primary="Workouts" sx={{ color: 'black' }} />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('/store')}>
            <ListItemText primary="Store" sx={{ color: 'black' }} />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('/about-us')}>
            <ListItemText primary="About" sx={{ color: 'black' }} />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('/register')}>
            <ListItemText primary="Join" sx={{ color: 'black' }} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
