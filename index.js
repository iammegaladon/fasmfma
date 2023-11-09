// Importing a built-in module
const fs = require('fs');

// Reading a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  console.log('File content:', data);
});

// A simple function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Using the function
greet('John');
