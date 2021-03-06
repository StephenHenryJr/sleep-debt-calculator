// let input = document.getElementById('input');
// let button = document.getElementById('button')
// let responseField = document.getElementById('responseField')

// //Function that very simply adds up daily sleep in hr(s) from M-S.
// const getActualSleepHours = (hours) => {
//   return hours * 7;
// }

// //Function that determines the weekly ideal amount of sleeping hours.
// const getIdealSleepHours = idealHours => idealHours * 7;

// //Function that calculates and determines if you got surplus, deficiency of perfect amount of sleep. Previous 2 functions are stored in variable and then used in if statement to make this determination.
// const calculateSleepDebt = () => {
//   const actualSleepHours = getActualSleepHours(8);
//   const idealSleepHours = getIdealSleepHours(8);
//   if (actualSleepHours === idealSleepHours) {
//     console.log('You got the perfect amount of sleep!');
//   }
//   else if (actualSleepHours > idealSleepHours) {
//     console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hr(s) of extra sleep. Go burn some energy!');
//   }
//   else if (actualSleepHours < idealSleepHours) {
//     console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hr(s) less sleep than needed. You should get some rest!') }
//   else {
//       console.log('Error! Somehting went Wrong!');
//     }
//   }

// calculateSleepDebt();

let input = document.getElementById('input');
let button = document.getElementById('button')
let responseField = document.getElementById('responseField')

//Function that very simply adds up daily sleep in hr(s) from M-S.
const getActualSleepHours = (hours) => {
  return hours * 7;
}

//Function that determines the weekly ideal amount of sleeping hours.
const getIdealSleepHours = idealHours => idealHours * 7;

//Function that calculates and determines if you got surplus, deficiency of perfect amount of sleep. Previous 2 functions are stored in variable and then used in if statement to make this determination.
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours(input.value);
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
    responseField.innerHTML = 'You got the perfect amount of sleep!'
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hr(s) of extra sleep. Go burn some energy!');
    responseField.innerHTML = 'You got ' + (actualSleepHours - idealSleepHours) + ' hr(s) of extra sleep. Go burn some energy!';
  }
  else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hr(s) less sleep than needed. You should get some rest!') 
    responseField.innerHTML = 'You got ' + (idealSleepHours - actualSleepHours) + ' hr(s) less sleep than needed. You should get some rest!';
  }
  else {
      console.log('Error! Something went Wrong!');
    }
  }

button.addEventListener('click', calculateSleepDebt)