import React from 'react';
import './Navbarcss.css';
import { Link } from 'react-router-dom';
import { FaFire } from "react-icons/fa";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
export default function Navbar({cartCount,cartTotal}){
    return(
        <nav className="navbar" >
            <div className="navbar-logo" style={{marginTop:'8px'}}>
                <a href="/"><img src="https://img.freepik.com/free-vector/gradient-gym-page-linkedin-profile-picture_742173-11442.jpg?t=st=1721897230~exp=1721900830~hmac=ccf5482db677e982247255862244e61a146e2156d2a820f092b0112355444862&w=740" alt='travel logo' height={40} width={50}/></a>
                <h4 style={{fontFamily:'cursive',fontWeight:'bold',marginTop:'-3px'}}>KineticKraze</h4>
            </div>
            <ul className="navbar-link" style={{marginTop:'7px'}}>
                <li><a href="/workout" style={{fontFamily:'cursive'}}> Workout</a></li>
                <li><a href="/store/equipment" style={{fontFamily:'cursive'}}>Equipments</a></li>
                <li><a href="/store/supplements" style={{fontFamily:'cursive'}}>Supplements</a></li>
                <li><a href="/dietplan" style={{fontFamily:'cursive'}}> Diet Plan</a></li>
                <li><a href='/gyms' style={{fontFamily:'cursive'}}>Gyms Nearby</a></li>
                <li><a href='/streak'>
                <FaFire />
                </a></li>
                <li>
                <Link to='/cart'> 
          <div className='cart-icon'>
            <LocalMallOutlinedIcon className='shoppingbag-icon' />
            {cartCount > 0 && (
              <span className='cart-count'>{cartCount}</span>
            )}
          </div>
        </Link>
                </li>
            </ul>
        </nav>
  );
}