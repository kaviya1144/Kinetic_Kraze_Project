// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./Left.css"; 

// function Left({ userId, height, weight, fname }) {
//     console.log("Sidebar: " + userId + " " + height + " " + weight + " " + fname);
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     const closeSidebar = () => {
//         setIsOpen(false);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (isOpen && !event.target.closest('.left') && !event.target.closest('.hamburger')) {
//                 closeSidebar();
//             }
//         };

//         document.addEventListener('click', handleClickOutside);

//         return () => {
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, [isOpen]);

//     return (
//         <div style={{backgroundColor:'aqua'}}>
//             <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
//                 ☰
//             </div>
//             <div className={`left ${isOpen ? 'open' : ''}`}>
//                 <h2 className="left-title">𝕂𝕚𝕟𝕖𝕥𝕚𝕔 𝕂𝕣𝕒𝕫𝕖</h2>
//                 <ul>
//                     <li><Link to={`/profile/${userId}`}>Profile</Link></li>
//                     <li><Link to={`/planning/${userId}?height=${height}&weight=${weight}&fname=${fname}`}>Planning</Link></li>
//                     <li><Link to={`/workouts/${userId}`}>Workouts</Link></li>
//                     <li><Link to={`/diet-plan/${userId}`}>Diet Plan</Link></li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Left;
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Left({ userId, height, weight, fname }) {
//     console.log("Sidebar: " + userId + " " + height + " " + weight + " " + fname);
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     const closeSidebar = () => {
//         setIsOpen(false);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (isOpen && !event.target.closest('.left') && !event.target.closest('.hamburger')) {
//                 closeSidebar();
//             }
//         };

//         document.addEventListener('click', handleClickOutside);

//         return () => {
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, [isOpen]);

//     return (
//         <div style={{ position: 'fixed', left: 0, top: 0, height: '100vh', backgroundColor: 'aqua', zIndex: 1000 }}>
//             <div
//                 className={`hamburger ${isOpen ? 'open' : ''}`}
//                 onClick={toggleSidebar}
//                 style={{
//                     fontSize: '30px',
//                     cursor: 'pointer',
//                     color: 'black',
//                     position: 'absolute',
//                     top: '15px',
//                     left: '15px',
//                 }}
//             >
//                 ☰
//             </div>
//             <div
//                 className={`left ${isOpen ? 'open' : ''}`}
//                 style={{
//                     width: isOpen ? '250px' : '0',
//                     overflowX: 'hidden',
//                     height: '100%',
//                     backgroundColor: '#1a1a1a',
//                     transition: 'width 0.3s ease',
//                 }}
//             >
//                 <h2
//                     className="left-title"
//                     style={{
//                         color: 'white',
//                         textAlign: 'center',
//                         marginLeft: '2px',
//                         marginRight: '3px',
//                         fontSize: '2rem',
//                         padding: '20px 0',
//                     }}
//                 >
//                     𝕂𝕚𝕟𝕖𝕥𝕚𝕔 𝕂𝕣𝕒𝕫𝕖
//                 </h2>
//                 <ul style={{ listStyleType: 'none', padding: 0 }}>
//                     <li style={{ margin: '15px 0' }}>
//                         <Link
//                             to={`/profile/${userId}`}
//                             style={{
//                                 textDecoration: 'none',
//                                 color: 'white',
//                                 fontWeight: 'bold',
//                                 display: 'block',
//                                 padding: '10px',
//                                 transition: 'background-color 0.3s',
//                             }}
//                         >
//                             Profile
//                         </Link>
//                     </li>
//                     <li style={{ margin: '15px 0' }}>
//                         <Link
//                             to={`/planning/${userId}?height=${height}&weight=${weight}&fname=${fname}`}
//                             style={{
//                                 textDecoration: 'none',
//                                 color: 'white',
//                                 fontWeight: 'bold',
//                                 display: 'block',
//                                 padding: '10px',
//                                 transition: 'background-color 0.3s',
//                             }}
//                         >
//                             Planning
//                         </Link>
//                     </li>
//                     <li style={{ margin: '15px 0' }}>
//                         <Link
//                             to={`/workouts/${userId}`}
//                             style={{
//                                 textDecoration: 'none',
//                                 color: 'white',
//                                 fontWeight: 'bold',
//                                 display: 'block',
//                                 padding: '10px',
//                                 transition: 'background-color 0.3s',
//                             }}
//                         >
//                             Workouts
//                         </Link>
//                     </li>
//                     <li style={{ margin: '15px 0' }}>
//                         <Link
//                             to={`/diet-plan/${userId}`}
//                             style={{
//                                 textDecoration: 'none',
//                                 color: 'white',
//                                 fontWeight: 'bold',
//                                 display: 'block',
//                                 padding: '10px',
//                                 transition: 'background-color 0.3s',
//                             }}
//                         >
//                             Diet Plan
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Left;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Left({ userId, height, weight, fname, onSidebarToggle }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        onSidebarToggle(!isOpen); // Pass the new state to the parent
    };

    const closeSidebar = () => {
        setIsOpen(false);
        onSidebarToggle(false); // Ensure the Plan page knows the sidebar is closed
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.left') && !event.target.closest('.hamburger')) {
                closeSidebar();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div style={{ position: 'fixed', left: 0, top: 0, height: '100vh', backgroundColor: 'black', zIndex: 1000 }}>
            <div
                className={`hamburger ${isOpen ? 'open' : ''}`}
                onClick={toggleSidebar}
                style={{
                    fontSize: '30px',
                    cursor: 'pointer',
                    color: 'black',
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                }}
            >
                ☰
            </div>
            <div
                className={`left ${isOpen ? 'open' : ''}`}
                style={{
                    width: isOpen ? '250px' : '0',
                    overflowX: 'hidden',
                    height: '100%',
                    backgroundColor: '#1a1a1a',
                    transition: 'width 0.3s ease',
                }}
            >
                {/* <Link
                    to={`/`}
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        marginLeft: '2px',
                        marginRight: '3px',
                        fontSize: '2rem',
                        padding: '20px 0',
                        marginTop:'5cm',
                         fontFamily:'Gupter',fontSize:'30px',
                         textDecoration:'none'
                    }}
                >
                    Kinetic Kraze
                </Link> */}
                <Link
  to={`/`}
  style={{
    color: 'white',
    textAlign: 'center',
    marginLeft: '2px',
    marginRight: '3px',
    fontSize: '2rem',
    padding: '20px 0',
    marginTop: '1.5cm',
    fontFamily: 'Gupter',
    fontWeight: 'bold',
    fontSize: '30px',
    textDecoration: 'none',
    display: 'block'  // or 'inline-block'
  }}
>
  Kinetic Kraze
</Link>
                <ul style={{ listStyleType: 'none', padding: 0 ,marginLeft: '1cm',fontFamily: "Gupiter",
   
    fontStyle: "normal",
    fontSize: "20px"}}>
                    <li style={{ margin: '15px 0' }}>
                        <Link
                            to={`/profile/${userId}`}
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                
                                display: 'block',
                                padding: '10px',
                                transition: 'background-color 0.3s',
                                fontFamily:'Gupter',fontSize:'27px'
                            }}
                        >
                            Profile
                        </Link>
                    </li>
                    <li style={{ margin: '15px 0' }}>
                        <Link
                            to={`/planning/${userId}?height=${height}&weight=${weight}&fname=${fname}`}
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                display: 'block',
                                padding: '10px',
                                transition: 'background-color 0.3s',
                                 fontFamily:'Gupter',fontSize:'27px'
                            }}
                        >
                            DietPlan
                        </Link>
                    </li>
                    <li style={{ margin: '15px 0' }}>
                        <Link
                            to={`/workouts/${userId}`}
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                
                                display: 'block',
                                padding: '10px',
                                transition: 'background-color 0.3s',
                                 fontFamily:'Gupter',fontSize:'27px'
                            }}
                        >
                            Workouts
                        </Link>
                    </li>
                    <li style={{ margin: '15px 0' }}>
                        <Link
                            to={`/cart`}
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                               
                                display: 'block',
                                padding: '10px',
                                transition: 'background-color 0.3s',
                                 fontFamily:'Gupter',fontSize:'27px'
                            }}
                        >
                           Your Cart
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Left;
