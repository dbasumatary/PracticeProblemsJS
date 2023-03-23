// Get year as command line argument
//process.argv is an array that contains the command-line arguments passed to the Node.js process
//To check the answer write eg. 'node LeapYear.js 2020'
const year = process.argv[2];

// Check if year is a leap year
const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

// Output result
if (isLeapYear) {
  console.log(`${year} is a Leap Year`);
} else {
  console.log(`${year} is not a Leap Year`);
}