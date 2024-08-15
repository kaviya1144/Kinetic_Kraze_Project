// import React, { useState, useEffect } from 'react';
// import { Button, Typography, Checkbox, FormControlLabel, Container, Box } from '@mui/material';

// const Streak = () => {
//   const [exercisesCompleted, setExercisesCompleted] = useState(false);
//   const [mealsCompleted, setMealsCompleted] = useState(false);
//   const [streak, setStreak] = useState(0);
//   const [lastCompletionDate, setLastCompletionDate] = useState(null);
//   const [discountCode, setDiscountCode] = useState('');

//   // Load streak and last completion date from local storage
//   useEffect(() => {
//     const savedStreak = localStorage.getItem('streak');
//     const savedLastCompletionDate = localStorage.getItem('lastCompletionDate');
//     const savedDiscountCode = localStorage.getItem('discountCode');

//     if (savedStreak) {
//       setStreak(parseInt(savedStreak, 10));
//     }
//     if (savedLastCompletionDate) {
//       setLastCompletionDate(new Date(savedLastCompletionDate));
//     }
//     if (savedDiscountCode) {
//       setDiscountCode(savedDiscountCode);
//     }
//   }, []);

//   const handleComplete = () => {
//     const today = new Date().toDateString();
//     if (lastCompletionDate === today) {
//       // Already marked today, no change
//       return;
//     }

//     // Update the streak if today is consecutive
//     const newStreak = lastCompletionDate
//       ? (new Date(lastCompletionDate).getTime() === new Date().setDate(new Date().getDate() - 1) ? streak + 1 : 1)
//       : 1;

//     setStreak(newStreak);
//     setLastCompletionDate(today);

//     // Store to local storage
//     localStorage.setItem('streak', newStreak);
//     localStorage.setItem('lastCompletionDate', today);

//     // Generate and store discount code based on streak count
//     let code = '';
//     if (newStreak === 10) {
//       code = 'DISCOUNT10';
//     } else if (newStreak === 50) {
//       code = 'DISCOUNT50';
//     }
//     setDiscountCode(code);
//     localStorage.setItem('discountCode', code);
//   };

//   return (
//     <Container>
//       <Box sx={{ textAlign: 'center', mt: 5 }}>
//         <Typography variant="h4" gutterBottom>
//           Daily Streak
//         </Typography>
//         <FormControlLabel
//           control={<Checkbox checked={exercisesCompleted} onChange={() => setExercisesCompleted(!exercisesCompleted)} />}
//           label="Have you done your exercises today?"
//         />
//         <FormControlLabel
//           control={<Checkbox checked={mealsCompleted} onChange={() => setMealsCompleted(!mealsCompleted)} />}
//           label="Have you completed your meals today?"
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleComplete}
//           sx={{ mt: 2 }}
//         >
//           Mark as Completed
//         </Button>
//         <Typography variant="h6" sx={{ mt: 3 }}>
//           Current Streak: {streak} days
//         </Typography>
//         {discountCode && (
//           <Typography variant="h6" sx={{ mt: 2, color: 'green' }}>
//             Congratulations! You've earned a discount code: {discountCode}
//           </Typography>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default Streak;import React, { useState, useEffect } from 'react';
// import { Button, Typography, Checkbox, FormControlLabel, Container, Box } from '@mui/material';
// import React,{ useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Streak = () => {
//   const [exercisesCompleted, setExercisesCompleted] = useState(false);
//   const [mealsCompleted, setMealsCompleted] = useState(false);
//   const [streak, setStreak] = useState(0);
//   const [lastCompletionDate, setLastCompletionDate] = useState(null);
//   const [discountCode, setDiscountCode] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = localStorage.getItem('user');
//     console.log(user);
//     if (!user) {
//       navigate('/login');
//       return;
//     }
    

//     // Load streak and last completion date from local storage
//     const savedStreak = localStorage.getItem('streak');
//     const savedLastCompletionDate = localStorage.getItem('lastCompletionDate');
//     const savedDiscountCode = localStorage.getItem('discountCode');

//     if (savedStreak) {
//       setStreak(parseInt(savedStreak, 10));
//     }
//     if (savedLastCompletionDate) {
//       setLastCompletionDate(new Date(savedLastCompletionDate).toDateString());
//     }
//     if (savedDiscountCode) {
//       setDiscountCode(savedDiscountCode);
//     }
//   }, [navigate]);

//   const handleComplete = () => {
//     const today = new Date().toDateString();
//     if (lastCompletionDate === today) {
//       // Already marked today, no change
//       return;
//     }

//     // Update the streak if today is consecutive
//     const newStreak = lastCompletionDate
//       ? (new Date(lastCompletionDate).getTime() === new Date().setDate(new Date().getDate() - 1) ? streak + 1 : 1)
//       : 1;

//     setStreak(newStreak);
//     setLastCompletionDate(today);

//     // Store to local storage
//     localStorage.setItem('streak', newStreak);
//     localStorage.setItem('lastCompletionDate', today);

//     // Generate and store discount code based on streak count
//     let code = '';
//     if (newStreak === 10) {
//       code = 'DISCOUNT10';
//     } else if (newStreak === 50) {
//       code = 'DISCOUNT50';
//     }
//     setDiscountCode(code);
//     localStorage.setItem('discountCode', code);
//   };

//   return (
//     <Container>
//       <Box sx={{ textAlign: 'center', mt: 5 }}>
//         <FormControlLabel
//           control={<Checkbox checked={exercisesCompleted} onChange={() => setExercisesCompleted(!exercisesCompleted)} />}
//           label="Have you done your exercises today?"
//         />
//         <FormControlLabel
//           control={<Checkbox checked={mealsCompleted} onChange={() => setMealsCompleted(!mealsCompleted)} />}
//           label="Have you completed your meals today?"
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleComplete}
//           sx={{ mt: 2 }}
//         >
//           Mark as Completed
//         </Button>
//         <Typography variant="h6" sx={{ mt: 3 }}>
//           Current Streak: {streak} days
//         </Typography>
//         {discountCode && (
//           <Typography variant="h6" sx={{ mt: 2, color: 'green' }}>
//             Congratulations! You've earned a discount code: {discountCode}
//           </Typography>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default Streak;
import React, { useEffect, useState } from 'react';
import { Button, Typography, Checkbox, FormControlLabel, Container, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const Streak = () => {
  const [exercisesCompleted, setExercisesCompleted] = useState(false);
  const [mealsCompleted, setMealsCompleted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [lastCompletionDate, setLastCompletionDate] = useState(null);
  const [discountCode, setDiscountCode] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
      return;
    }
    
    setUserName(user.name || `User ${user.userId}`); // Fallback if name is missing
    
    const userId = user.userId; // Get userId from the logged-in user

    // Load user-specific streak and last completion date from local storage
    const savedStreak = localStorage.getItem(`streak_${userId}`);
    const savedLastCompletionDate = localStorage.getItem(`lastCompletionDate_${userId}`);
    const savedDiscountCode = localStorage.getItem(`discountCode_${userId}`);

    if (savedStreak) {
      setStreak(parseInt(savedStreak, 10));
    }
    if (savedLastCompletionDate) {
      setLastCompletionDate(new Date(savedLastCompletionDate).toDateString());
    }
    if (savedDiscountCode) {
      setDiscountCode(savedDiscountCode);
    }
  }, [navigate]);

  const handleComplete = () => {

    if (!exercisesCompleted || !mealsCompleted) {
      alert('Please complete both your exercises and meals to add to your streak.');
      return;
    }

    const today = new Date().toDateString();
    if (lastCompletionDate === today) {
      // Already marked today, no change
      return;
    }

    // Update the streak if today is consecutive
    const newStreak = lastCompletionDate
      ? (new Date(lastCompletionDate).getTime() === new Date().setDate(new Date().getDate() - 1) ? streak + 1 : 1)
      : 1;

    setStreak(newStreak);
    setLastCompletionDate(today);

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
      return;
    }
    const userId = user.userId; // Get userId from the logged-in user

    // Store user-specific streak and last completion date
    localStorage.setItem(`streak_${userId}`, newStreak);
    localStorage.setItem(`lastCompletionDate_${userId}`, today);

    // Generate and store discount code based on streak count
    let code = '';
    if (newStreak === 10) {
      code = 'DISCOUNT10';
    } else if (newStreak === 50) {
      code = 'DISCOUNT50';
    }
    setDiscountCode(code);
    localStorage.setItem(`discountCode_${userId}`, code);
  };
  const handleBack = () => {
    navigate(-1); // This will navigate to the previous page
  };

  return (
    <Container>
       <IconButton onClick={handleBack} style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <ArrowBack />
      </IconButton>
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        {userName && (
          <Typography variant="h5" sx={{ mb: 3 }}>
            Welcome
          </Typography>
        )}
        <FormControlLabel
          control={<Checkbox checked={exercisesCompleted} onChange={() => setExercisesCompleted(!exercisesCompleted)} />}
          label="Have you done your exercises today?"
        />
        <br/>
        <FormControlLabel
          control={<Checkbox checked={mealsCompleted} onChange={() => setMealsCompleted(!mealsCompleted)} />}
          label="Have you completed your meals today?"
        />
        <br/>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleComplete}
          sx={{ mt: 2 }}
        >
          Add your streak
        </Button>
        <Typography variant="h6" sx={{ mt: 3 }}>
          Current Streak: {streak} days
        </Typography>
        {discountCode && (
          <Typography variant="h6" sx={{ mt: 2, color: 'green' }}>
            Congratulations! You've earned a discount code: {discountCode}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Streak;
