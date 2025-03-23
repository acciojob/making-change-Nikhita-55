const makeChange = (c) => {
  // your name here
	function makeChange(cents) {
  // Initialize an object to hold the coin counts
  let change = {
    q: 0, // Quarters
    d: 0, // Dimes
    n: 0, // Nickels
    p: 0  // Pennies
  };

  // Calculate the number of quarters
  change.q = Math.floor(cents / 25);
  cents %= 25; // Update cents after using quarters

  // Calculate the number of dimes
  change.d = Math.floor(cents / 10);
  cents %= 10; // Update cents after using dimes

  // Calculate the number of nickels
  change.n = Math.floor(cents / 5);
  cents %= 5; // Update cents after using nickels

  // Remaining cents are all pennies
  change.p = cents;

  return change;
}

// Example usage:
console.log(makeChange(47));  // Output: { q: 1, d: 2, n: 0, p: 2 }
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
