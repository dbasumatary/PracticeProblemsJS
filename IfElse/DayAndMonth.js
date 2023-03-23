// Get day and month as command line arguments
//process.argv is an array that contains the command-line arguments passed to the Node.js process
//To check the answer write eg. 'node DayAndMonth.js 10 4'
let day = process.argv[2];
let month = process.argv[3];

// Convert day and month to numbers
day = parseInt(day);
month = parseInt(month);

// Check if day of month is between March 20 and June 20
if (month === 3 && day >= 20) {
  console.log(true);
} else if (month > 3 && month < 6) {
  console.log(true);
} else if (month === 6 && day <= 20) {
  console.log(true);
} else {
  console.log(false);
}