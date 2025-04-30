const http = require('http');
const fs = require('fs'); // File system module to read files

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()} : New request received`; // Correct template literal
    console.log(log); // Log to console

    fs.appendFile('log.txt', `${log}\n`, (err) => {
        if (err) throw err; // Handle error if any
    });

    console.log("New request received");
    console.log(req.headers); 

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello World!"); // Send response to the client
});

myserver.listen(8000, () => {
    console.log("Server is running on port 8000");
});
