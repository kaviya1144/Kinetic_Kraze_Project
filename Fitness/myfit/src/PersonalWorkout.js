// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import TableCell from '@mui/material/TableCell';

// // Styled Components
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
//     id: 1,
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
//   {
//     id: 2,
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

// const PersonalWorkout = () => {
//   const { id } = useParams();
//   const workout = data1.find((workout) => workout.id === parseInt(id, 10));

//   return (
//     <div>
//       <h1 style={{ fontFamily: 'Open Sans, sans-serif', lineHeight: '1.1', textAlign: 'center', marginBottom: '25px', fontSize: '3rem', fontWeight: 'bolder' }}>
//         Workouts
//       </h1>
//       <p style={{ textAlign: 'center', margin: '0 auto 25px', maxWidth: '800px', fontSize: '1.3rem', lineHeight: '1.6', textRendering: 'optimizeLegibility' }}>
//         Our workouts database has hundreds of free workout plans designed for building muscle. The workouts are created by fitness experts and come with a free downloadable PDF you can reference when training. Use the filters below to find the best workout for your goal, training experience, and equipment access.
//       </p>

//       {/* Display workout cards */}
//       <div className="card-container" style={{ margin: '2rem 0' }}>
//         {data1.map((workout) => (
//           <Link to={`/workouts/${workout.id}`} key={workout.id} style={{ textDecoration: 'none', color: '#a35a97' }}>
//             <section className="workout-card">
//               <img src={workout.img} alt={workout.title} style={{ width: '100%', height: 'auto' }} />
//               <div className="workout-card-details">
//                 <h3 className="workout-card-title">{workout.title}</h3>
//               </div>
//             </section>
//           </Link>
//         ))}
//       </div>

//       {workout ? (
//         <div className="workout-detail-section">
//           <h1 className="workout-title-header" style={{ fontSize: '2.7rem', fontWeight: 'bold' }}>{workout.title}</h1>
//           <img src={workout.img} alt={workout.title} className="workout-image" />

//           <div className="instructions-section">
//             <div className="summary-container" style={{ margin: '0 15px 15px', paddingLeft: '15px', fontFamily: 'Roboto, sans-serif', fontSize: '22px', marginTop: '3rem', marginBottom: '3rem', width: '80%', marginLeft: '3cm' }}>
//               <div className="summary-content" style={{ margin: '0 15px 15px', paddingLeft: '15px', borderLeft: '5px solid #a35a97', fontFamily: 'Roboto, sans-serif', fontSize: '24px' }}>
//                 <div className="field-item">
//                   <div className="field-item-content" style={{ fontSize: '28px' }}>
//                     {workout.summary}
//                   </div>
//                 </div>
//               </div>

//               <div style={{ background: '#f5f5f5', marginBottom: '25px', padding: '15px', borderTop: '5px solid #a35a97', borderRadius: '2px', textAlign: 'center', textTransform: 'uppercase', paddingTop: '2rem', fontSize: '21px' }}>
//                 <h5 style={{ fontSize: '1.7rem', lineHeight: 1.4, marginTop: 0, marginBottom: '0.4em', color: '#1a1a1a', fontFamily: 'Open Sans, sans-serif' }}>Instructions</h5>
//               </div>

//               <div className="instructions-list">
//                 <ol>
//                   {workout.instructions.map((instruction, index) => (
//                     <li key={index}>{instruction}</li>
//                   ))}
//                 </ol>
//               </div>
//             </div>

//             <div className="exercise-table-container">
//               <TableContainer component={Paper}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <HeaderTableCell>Exercise</HeaderTableCell>
//                       <HeaderTableCell align="right">Sets</HeaderTableCell>
//                       <HeaderTableCell align="right">Reps</HeaderTableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {workout.exercises.map((exercise, index) => (
//                       <TableRow key={index}>
//                         <ContentTableCell>{exercise.name}</ContentTableCell>
//                         <ContentTableCell align="right">{exercise.sets}</ContentTableCell>
//                         <ContentTableCell align="right">{exercise.reps}</ContentTableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div style={{ textAlign: 'center', marginTop: '2rem' }}>
//           <p style={{ fontSize: '1.5rem', color: '#a35a97' }}>Workout not found.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PersonalWorkout;

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import './PersonalWorkout.css';
import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';


// Styled Components
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

const data2 = [
  {
    id:'8',
    img: "https://cdn.muscleandstrength.com/sites/default/files/5_day_dumbbell_workout_-_1200x630.jpg",
    title: 'Dumbbell Only Workout:5 Day Dumbbell Workout Split',
    summary: 'This 5 day dumbbell only workout program only requires dumbbells and is perfect for those looking to build lean muscle mass at home or on the go!',
    maingoal: 'Build Muscle',
    type: 'Intermediate',
    level: 'Beginner',
    duration: '12 Weeks',
    perweek: '5',
    time: '45-60 minutes',
    equipment: 'Bodyweight, Dumbbells',
    gender: 'Male & Female',
    description1: "So, you’ve completed the 3 day full body dumbbell only workout? AND you’ve completed the 4 day upper/lower dumbbell only workout as a form of progression?",
    description2: "Well, you’ve asked for it and today I’m bringing you the next step in our dumbbell only workout series.",
    description3: "It can be performed by those who work out at home in their home gym, travel frequently and need a go-to program they can do at a hotel gym, or anyone really who prefers to use dumbbells over other implements at the gym.",
    nutrition: "Nutrition First",
    nutrition1: "There are so many diet plans and ideas that it can make your head spin.",
    nutrition2: "For these eight weeks, we suggest that you refer to our fat loss expert guide, and follow this as best as you can. Keep it this simple for now, and you’ll find this process to be a lot easier. Trust me, there will be plenty of time to learn more about specific diets and strategies down the road.",
    // img1: "https://cdn.muscleandstrength.com/sites/default/files/images/2023/08/overhead_shot_of_female_making_protein_shake.jpg",
    // supplements: "Supplements",
    // s1: "Let’s also talk briefly about supplements. There are a lot of pre-workouts, fat burners, and other weight loss products on the market. You can certainly add them into this program if you want, but make sure you avoid these two mistakes:",
    // s2: "1. Don’t out-supplement a bad diet. Food matters more than supplements. If you have a tight budget and have to make a decision, buy food every single time.",
    // s3: "2. Keep it simple.",
    // s4: "There is a theme to this program. We don’t want you to feel overwhelmed.",
    // s5: "A multivitamin and protein powder is great to start with. If you feel like you can take on a pre-workout or fat loss supplement as well, that is okay, but they aren’t necessary. Talk to your doctor about any supplement you’re thinking of buying first as well so you know you’re healthy enough to have it.",
    // img2: "https://cdn.muscleandstrength.com/sites/default/files/images/2023/08/fit_woman_getting_ready_to_jog_outside.jpg",
    // zone2: "Zone 2 Cardio",
    // z1: "Cardiovascular exercise is going to be a big part of this program, specifically Zone 2 Cardio. This is where we’re going to get into the weeds a little bit, but it will be worth it.",
    // z2: "Many cardio programs used to be centered around five heart-rate “zones.” The higher the number, the more intense the exercise is and the higher your heart rate goes. For beginners, doing cardio that would be the equivalent of the second or third heart rate zone (70-80% of your max heart rate).",
    // z3: "To determine your max heart rate, take the number 220 and subtract your age. So, if you’re 40 years old, 220-40 would be 180 beats per minute. The 70-80% range would be 70 to 80 percent of that 180.",
    // z4: "Zone 2 cardio calls for you to keep your heart rate at the 70% range throughout the entire time you do cardio. So, if we go back to our previous example, 70% of 180 would be 126 beats per minute. You would track this on the machine you’re using for cardio if it has heart rate capability or with a monitor that you can wear.",
    // z5: "The key to Zone 2 is that you maintain that consistent pace from start to finish. You can use the elliptical, rower, treadmill, or do any other form of cardio that you like. As long as you’re either tracking the heart rate and it stays in that 70% range, or if you feel like you’re giving a seven out of ten effort, you’re good.",
    // z6: "Beginners on this program will do four cardio sessions a week for 20-30 minutes per session at the Zone 2 pace. 20 minutes is the minimum, but if you have time to do 30, then you should. You will perform these sessions after your weight training. So, you will train with weights first, then do cardio after. This approach will help you use your strength with the weights without affecting your cardio performance.",
    // stitle: '8 Week Beginner Fat Loss Workout for Women',
    day1: "Day 1: Chest, Shoulders, & Triceps Dumbbell Workout",
    exercises: [
      { Exercise: 'Dumbbell Bench Press', Sets: 4, Reps: '8-10' },
      { Exercise: 'Incline Dumbbell Bench Press', Sets: 4, Reps: '8-10' },
      { Exercise: 'Dumbbell Floor Press', Sets: 3, Reps: '8-12' },
      { Exercise: 'Standing Dumbbell Press', Sets: 4, Reps: '8-10' },
      { Exercise: 'Dumbbell Lateral Raise', Sets: 3, Reps: '8-12' },
      { Exercise: 'Dumbbell Tricep Kickback', Sets: 3, Reps: '8-12' },
    ],
    day2: "Day 2: Legs & Core Dumbbell Workout",
    exercises1: [
      { Exercise: 'Dumbbell Goblet Squat', Sets: 4, Reps: '8-10' },
      { Exercise: 'Dumbbell Stiff Leg Deadlift', Sets: 4, Reps: '8-10' },
      { Exercise: 'Dumbbell Rear Lunge', Sets: 4, Reps: '8-10 Each' },
      { Exercise: 'Dumbbell Frog Squat', Sets: 3, Reps: '8-12' },
      { Exercise: 'Dumbbell Calf Raise', Sets: 4, Reps: '20' },
      { Exercise: 'Weighted Crunch', Sets: 3, Reps: '20' },
      { Exercise: 'Side Planks', Sets: 3, Reps: '20 Each' },
    ],
    day3: "Day 3: Back & Biceps Dumbbell Workout",
    exercises2: [
      { Exercise: 'Dumbbell Bent Over Row', Sets: 4, Reps: '8-12' },
      { Exercise: 'Tripod Dumbbell Row', Sets: 4, Reps: '8-12 Each' },
      { Exercise: 'Dumbbell Pullover', Sets: 3, Reps: '8-12' },
      { Exercise: 'Reverse Grip Dumbbell Row', Sets: 4, Reps: '8-12' },
      { Exercise: 'Dumbbell Bicep Curl', Sets: 3, Reps: '10-15' },
      { Exercise: 'Dumbbell Hammer Curl', Sets: 3, Reps: '10-15' },
    ],
    day4: "Day 4: Legs & Core Dumbbell Workout",
    exercises3: [
      { Exercise: 'Dumbbell Squat', Sets: 4, Reps: '8-10' },
      { Exercise: 'Dumbbell Deadlift', Sets: 4, Reps: '8-10' },
      { Exercise: 'Dumbbell Split Squat', Sets: 3, Reps: '8-12 Each' },
      { Exercise: 'Dumbbell Hip Thrust', Sets: 4, Reps: '10-15' },
      { Exercise: 'Dumbbell Calf Raise', Sets: 4, Reps: '20' },
      { Exercise: 'Dumbbell Side Bends', Sets: 3, Reps: '15 Each' },
      { Exercise: 'Plank', Sets: 3, Reps: '20 Secs' },
    ],
    day5: "Day 5: Complete Upper Body Dumbbell Workout",
    exercises4: [
      { Exercise: 'One Arm Dumbbell Rows', Sets: 4, Reps: '8-10 Each' },
      { Exercise: 'Dumbbell Arnold Press', Sets: 4, Reps: '8-10' },
      { Exercise: 'Incline Dumbbell Bench Press', Sets: 4, Reps: '8-12' },
      { Exercise: 'Chest Supported Dumbbell Row', Sets: 3, Reps: '8-12' },
      { Exercise: 'Dumbbell Pinwheel Curl', Sets: 2, Reps: '8-12' },
      { Exercise: 'Overhead Dumbbell Tricep Extension', Sets: 3, Reps: '8-12' },
      { Exercise: 'Dumbbell Shrug', Sets: 3, Reps: '12-15' },
    ],
    conclusion: "Conclusion",
    c1: "Even though we want this to be an easy process, we’re well aware that you may have questions along the way. The good news is that there is a comments section at the bottom of this article. Feel free to leave questions there, and we’ll do our best to help you out along the way.",
    c2: "Make sure you share your progress as well. We want to celebrate the wins with you."
  }
];

 



const PersonalWorkout = () => {
  const { id } = useParams();
  const workout = data2.find((item) => item.id === id);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // This will navigate to the previous page
  };

  if (!workout) return <div>Workout not found</div>;

  return (
    <div className="personal-workout-container">
      <IconButton onClick={handleBack} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <ArrowBack />
      </IconButton>
      <h1>{workout.title}</h1>
      <img src={workout.img} alt={workout.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <p>{workout.summary}</p>
      <h2>Main Goal: {workout.maingoal}</h2>
      <h2>Type: {workout.type}</h2>
      <h2>Level: {workout.level}</h2>
      <h2>Duration: {workout.duration}</h2>
      <h2>Per Week: {workout.perweek}</h2>
      <h2>Time: {workout.time}</h2>
      <h2>Equipment: {workout.equipment}</h2>
      <h2>Gender: {workout.gender}</h2>
      <p>{workout.description1}</p>
      <p>{workout.description2}</p>
      <p>{workout.description3}</p>
      <h2>{workout.nutrition}</h2>
      <p>{workout.nutrition1}</p>
      <p>{workout.nutrition2}</p>
      {[workout.day1, workout.day2, workout.day3, workout.day4, workout.day5].map((day, index) => (
        <div key={index}>
          <h3>{day}</h3>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <HeaderTableCell>Exercise</HeaderTableCell>
                  <HeaderTableCell>Sets</HeaderTableCell>
                  <HeaderTableCell>Reps</HeaderTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {workout[`exercises${index === 0 ? '' : index}`]?.map((exercise, i) => (
                  <TableRow key={i}>
                    <ContentTableCell>{exercise.Exercise}</ContentTableCell>
                    <ContentTableCell>{exercise.Sets}</ContentTableCell>
                    <ContentTableCell>{exercise.Reps}</ContentTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
      
      <h2>{workout.conclusion}</h2>
      <p>{workout.c1}</p>
      <p>{workout.c2}</p>
    </div>
  );
};

export default PersonalWorkout;
