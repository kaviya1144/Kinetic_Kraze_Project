// src/component/Logout.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data from local storage or session storage
    localStorage.removeItem('user'); // or sessionStorage.removeItem('user')
    
    // Redirect to login page after logout
    navigate('/login');
  }, [navigate]);

  return null; // No UI needed for this component
};

export default Logout;
