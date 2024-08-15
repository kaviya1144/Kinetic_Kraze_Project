// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { TableCell } from '@mui/material';

// // Styled components
// const HeaderTableCell = styled(TableCell)(({ theme }) => ({
//   backgroundColor: '#a35a97',
//   color: theme.palette.common.white,
//   fontWeight: 'bold',
//   fontSize: '24px',
//   borderBottom: '2px solid #FFFFFF',
// }));

// const ContentTableCell = styled(TableCell)(({ theme }) => ({
//   color: '#333333',
//   fontSize: '20px',
//   borderBottom: '1px solid #E0E0E0',
// }));

// // Static Data
// const data1 = [
//   {
//     img: "https://cdn.muscleandstrength.com/sites/default/files/5_day_dumbbell_workout_-_1200x630.jpg",
//     title: 'Dumbbell Only Workout: 5 Day Dumbbell Workout Split',
//     summary: 'This 5 day dumbbell only workout program only requires dumbbells and is perfect for those looking to build lean muscle mass at home or on the go!',
//     instructions: [
//       "Warm up before starting each workout.",
//       "Cool down and stretch after each session.",
//       "Adjust weights according to your fitness level.",
//     ],
//     exercises: [
//       { name: 'Dumbbell Bench Press', sets: 4, reps: '8-10' },
//       { name: 'Incline Dumbbell Bench Press', sets: 4, reps: '8-10' },
//       { name: 'Dumbbell Floor Press', sets: 3, reps: '8-12' },
//       { name: 'Standing Dumbbell Press', sets: 4, reps: '8-10' },
//       { name: 'Dumbbell Lateral Raise', sets: 3, reps: '8-12' },
//       { name: 'Dumbbell Tricep Kickback', sets: 3, reps: '8-12' },
//     ]
//   },
// ];

// // Combined Component
// const WorkoutDetails1 = () => {
//   const { title } = useParams();
//   const workout = data1.find((workout) => workout.title === title);

//   if (!workout) {
//     return <div>Workout not found</div>;
//   }

//   return (
//     <div className="workout-detail-section">
//       <h1 className="workout-title-header" style={{ fontSize: '2.7rem', fontWeight: 'bold' }}>{workout.title}</h1>
//       <img src={workout.img} alt={workout.title} className="workout-image" />

//       <div className="instructions-section">
//         <div className="summary-container" style={{ margin: '0 15px 15px', paddingLeft: '15px', fontFamily: 'Roboto, sans-serif', fontSize: '22px', marginTop: '3rem', marginBottom: '3rem', width: '80%', marginLeft: '3cm' }}>
//           <div className="summary-content" style={{ margin: '0 15px 15px', paddingLeft: '15px', borderLeft: '5px solid #a35a97', fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}>
//             <div className="field-item">
//               <div className="field-item-content" style={{ fontSize: '28px' }}>
//                 {workout.summary}
//               </div>
//             </div>
//           </div>

//           <div style={{ background: '#f5f5f5', marginBottom: '25px', padding: '15px', borderTop: '5px solid #a35a97', borderRadius: '2px', textAlign: 'center', textTransform: 'uppercase', paddingTop: '2rem', fontSize: '21px' }}>
//             <h5 style={{ fontSize: '1.7rem', lineHeight: 1.4, marginTop: 0, marginBottom: '0.4em', color: '#1a1a1a', fontFamily: 'Open Sans, sans-serif' }}>Instructions</h5>
//           </div>

//           <div className="instructions-list">
//             <ol>
//               {workout.instructions.map((instruction, index) => (
//                 <li key={index}>{instruction}</li>
//               ))}
//             </ol>
//           </div>
//         </div>

//         <div className="exercise-table-container">
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <HeaderTableCell>Exercise</HeaderTableCell>
//                   <HeaderTableCell align="right">Sets</HeaderTableCell>
//                   <HeaderTableCell align="right">Reps</HeaderTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {workout.exercises.map((exercise, index) => (
//                   <TableRow key={index}>
//                     <ContentTableCell>{exercise.name}</ContentTableCell>
//                     <ContentTableCell align="right">{exercise.sets}</ContentTableCell>
//                     <ContentTableCell align="right">{exercise.reps}</ContentTableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </div>

//       <div className="button-container" style={{ margin: '2rem 0' }}>
//         <button className="custom-button">Start Workout</button>
//       </div>

//       <div className="card-container" style={{ margin: '2rem 0' }}>
//         <Link to={`/workout/${workout.title}`} style={{ textDecoration: 'none', color: '#a35a97' }}>
//           <section className="workout-card">
//             <img src={workout.img} alt={workout.title} style={{ width: '100%', height: 'auto' }} />
//             <div className="workout-card-details">
//               <h3 className="workout-card-title">{workout.title}</h3>
//             </div>
//           </section>
//         </Link>
//       </div>

//       <div className="radio-input-container" style={{ margin: '2rem 0' }}>
//         <label className="radio-label-container">
//           <input type="radio" name="workoutType" value="Beginner" />
//           <span className="custom-checkmark"></span>
//           Beginner
//         </label>
//         <label className="radio-label-container">
//           <input type="radio" name="workoutType" value="Intermediate" />
//           <span className="custom-checkmark"></span>
//           Intermediate
//         </label>
//         <label className="radio-label-container">
//           <input type="radio" name="workoutType" value="Advanced" />
//           <span className="custom-checkmark"></span>
//           Advanced
//         </label>
//       </div>
//     </div>
//   );
// }

// export default WorkoutDetails1;

import React from "react";
import { useParams, Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableCell } from '@mui/material';

// Styled components
const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#a35a97',
  color: theme.palette.common.white,
  fontWeight: 'bold',
  fontSize: '24px',
  borderBottom: '2px solid #FFFFFF',
}));

const ContentTableCell = styled(TableCell)(({ theme }) => ({
  color: '#333333',
  fontSize: '20px',
  borderBottom: '1px solid #E0E0E0',
}));

// Static Data
const data1 = [
  {
    img: "https://cdn.muscleandstrength.com/sites/default/files/5_day_dumbbell_workout_-_1200x630.jpg",
    title: 'Dumbbell Only Workout: 5 Day Dumbbell Workout Split',
    summary: 'This 5 day dumbbell only workout program only requires dumbbells and is perfect for those looking to build lean muscle mass at home or on the go!',
    instructions: [
      "Warm up before starting each workout.",
      "Cool down and stretch after each session.",
      "Adjust weights according to your fitness level.",
    ],
    exercises: [
      { name: 'Dumbbell Bench Press', sets: 4, reps: '8-10' },
      { name: 'Incline Dumbbell Bench Press', sets: 4, reps: '8-10' },
      { name: 'Dumbbell Floor Press', sets: 3, reps: '8-12' },
      { name: 'Standing Dumbbell Press', sets: 4, reps: '8-10' },
      { name: 'Dumbbell Lateral Raise', sets: 3, reps: '8-12' },
      { name: 'Dumbbell Tricep Kickback', sets: 3, reps: '8-12' },
    ]
  },
];

// Combined Component
const WorkoutDetails1 = () => {
  const { title } = useParams();
  const workout = data1.find((workout) => workout.title === title);

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div className="workout-detail-section">
      <h1 className="workout-title-header" style={{ fontSize: '2.7rem', fontWeight: 'bold' }}>{workout.title}</h1>
      <img src={workout.img} alt={workout.title} className="workout-image" />

      <div className="instructions-section">
        <div className="summary-container" style={{ margin: '0 15px 15px', paddingLeft: '15px', fontFamily: 'Roboto, sans-serif', fontSize: '22px', marginTop: '3rem', marginBottom: '3rem', width: '80%', marginLeft: '3cm' }}>
          <div className="summary-content" style={{ margin: '0 15px 15px', paddingLeft: '15px', borderLeft: '5px solid #a35a97', fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}>
            <div className="field-item">
              <div className="field-item-content" style={{ fontSize: '28px' }}>
                {workout.summary}
              </div>
            </div>
          </div>

          <div style={{ background: '#f5f5f5', marginBottom: '25px', padding: '15px', borderTop: '5px solid #a35a97', borderRadius: '2px', textAlign: 'center', textTransform: 'uppercase', paddingTop: '2rem', fontSize: '21px' }}>
            <h5 style={{ fontSize: '1.7rem', lineHeight: 1.4, marginTop: 0, marginBottom: '0.4em', color: '#1a1a1a', fontFamily: 'Open Sans, sans-serif' }}>Instructions</h5>
          </div>

          <div className="instructions-list">
            <ol>
              {workout.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="exercise-table-container">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <HeaderTableCell>Exercise</HeaderTableCell>
                  <HeaderTableCell align="right">Sets</HeaderTableCell>
                  <HeaderTableCell align="right">Reps</HeaderTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {workout.exercises.map((exercise, index) => (
                  <TableRow key={index}>
                    <ContentTableCell>{exercise.name}</ContentTableCell>
                    <ContentTableCell align="right">{exercise.sets}</ContentTableCell>
                    <ContentTableCell align="right">{exercise.reps}</ContentTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className="button-container" style={{ margin: '2rem 0' }}>
        <button className="custom-button">Start Workout</button>
      </div>

      <div className="card-container" style={{ margin: '2rem 0' }}>
        <Link to={`/workout/${workout.title}`} style={{ textDecoration: 'none', color: '#a35a97' }}>
          <section className="workout-card">
            <img src={workout.img} alt={workout.title} style={{ width: '100%', height: 'auto' }} />
            <div className="workout-card-details">
              <h3 className="workout-card-title">{workout.title}</h3>
            </div>
          </section>
        </Link>
      </div>

      <div className="radio-input-container" style={{ margin: '2rem 0' }}>
        <label className="radio-label-container">
          <input type="radio" name="workoutType" value="Beginner" />
          <span className="custom-checkmark"></span>
          Beginner
        </label>
        <label className="radio-label-container">
          <input type="radio" name="workoutType" value="Intermediate" />
          <span className="custom-checkmark"></span>
          Intermediate
        </label>
        <label className="radio-label-container">
          <input type="radio" name="workoutType" value="Advanced" />
          <span className="custom-checkmark"></span>
          Advanced
        </label>
      </div>
    </div>
  );
}

export default WorkoutDetails1;
