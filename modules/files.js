const fs = require('fs');

// Synchronously write to a file
fs.writeFileSync('./test.txt', 'Hello Node.js!');

// Asynchronously write to a file
fs.writeFile('./test.txt', 'Hello Node.js!', (err) => {
  if (err) throw err;
  console.log('File written successfully (async)');
});

// Synchronously read from a file
const result = fs.readFileSync('./contacts.txt', 'utf8');
console.log('Contents of contacts.txt:', result);

// Asynchronously read from a file
fs.readFile('./contacts.txt', 'utf8', (err, data) => {
 if (err) throw err;
 console.log('Contents of contacts.txt (async):', data);
 });

// Append current date to a file
fs.appendFileSync('./test.txt', '\n' + new Date().toLocaleString());
console.log('Date appended to test.txt');

// Synchronously copy a file
fs.cpSync('./test.txt', './backup-test.txt');
console.log('File copied to backup-test.txt (sync)');

// Synchronously delete the backup file
fs.unlinkSync('./backup-test.txt');
console.log('backup-test.txt has been deleted (sync)');

// Synchronously get file stats for test.txt
const stats = fs.statSync('./test.txt');
console.log('File stats for test.txt:', stats);
console.log(`Is file? ${stats.isFile()}`);
console.log(`File size: ${stats.size} bytes`);
console.log(`Last modified: ${stats.mtime}`);