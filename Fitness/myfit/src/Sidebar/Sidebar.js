import React from 'react';
import BodyFocus from './BodyFocus/BodyFocus';
import Equipment from './Equipment/Equipment';
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const Sidebar = ({ handleBodyFocusChange, handleEquipmentChange }) => 
  {

    const navigate = useNavigate();
    const handleBack = () => {
      navigate(-1); // This will navigate to the previous page
    };
  return (
    <>
      <section className='sidebar'>
      <IconButton onClick={handleBack} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <ArrowBack />
      </IconButton>
        <div>
          <h1></h1>
        </div>
        <BodyFocus handleChange={handleBodyFocusChange} />
        <Equipment handleChange={handleEquipmentChange} />
      </section>
    </>
  );
}

export default Sidebar;