# sleep-debt-calculator

Building a small sleep debt calculator.
This will let you know wether or not you're getting the right amout of sleep. 

This again is just to practice basic JS and using the DOM.

This code performs the following tasks:

- It selects three HTML elements using their respective IDs, and stores them in variables: 'input', 'button', and 'responseField'.
- It defines a function 'getActualSleepHours' that takes an argument (number of hours slept), multiplies it by 7, and returns the result (total hours slept in a week).
- It defines a function 'getIdealSleepHours' that takes an argument (ideal number of hours of sleep per day), multiplies it by 7, and returns the result (total ideal hours of sleep in a week).
- It defines a function 'calculateSleepDebt' that does the following:
- It calls 'getActualSleepHours' with the value entered in the 'input' field and stores the result in a variable 'actualSleepHours'.
- It calls 'getIdealSleepHours' with an ideal of 8 hours of sleep per day and stores the result in a variable 'idealSleepHours'.
- It compares the actual sleep hours with the ideal sleep hours, and based on the comparison, it logs a message to the console and sets the innerHTML of the 'responseField' element to a message.
- It attaches an event listener to the 'button' element that listens for a 'click' event and executes the 'calculateSleepDebt' function.

Thank you, 
