let arr = new Array(10); // Declare an empty array of size 10

for (let i = 0; i < 10; i++) {
  let input = prompt(`Enter the value for index ${i}:`); // Prompt the user for a value
  let number = parseFloat(input); // Convert the user input to a number
  if (!isNaN(number)) {
    arr[i] = number; // Add the number to the array at index i
  }
}

console.log(arr); // Display the array to the console
