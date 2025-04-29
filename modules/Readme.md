 <h1>File Handling in Node.js</h1>
    <p>This repository contains examples and documentation on how to handle files in Node.js using the <code>fs</code> module. We will explore how to:</p>
    <ul>
      <li>Create files</li>
      <li>Write to files</li>
      <li>Read from files</li>
      <li>Append data to files</li>
      <li>Copy files</li>
      <li>Delete files</li>
      <li>Get file statistics</li>
    </ul>

    <hr>

    <h2>Table of Contents</h2>
    <ul>
      <li><a href="#1-overview">1. Overview</a></li>
      <li><a href="#2-synchronous-file-handling">2. Synchronous File Handling</a></li>
      <ul>
        <li><a href="#write-to-a-file">Write to a file</a></li>
        <li><a href="#read-from-a-file">Read from a file</a></li>
        <li><a href="#append-to-a-file">Append to a file</a></li>
        <li><a href="#copy-a-file">Copy a file</a></li>
        <li><a href="#delete-a-file">Delete a file</a></li>
        <li><a href="#get-file-stats">Get file stats</a></li>
      </ul>
      <li><a href="#3-asynchronous-file-handling">3. Asynchronous File Handling</a></li>
      <ul>
        <li><a href="#write-to-a-file-async">Write to a file (Async)</a></li>
        <li><a href="#read-from-a-file-async">Read from a file (Async)</a></li>
      </ul>
    </ul>

    <hr>

    <h2 id="1-overview">1. Overview</h2>
    <p>In Node.js, the <code>fs</code> (File System) module allows you to interact with the file system. With this module, you can create, modify, delete, and read files in a synchronous or asynchronous manner.</p>

    <h2 id="2-synchronous-file-handling">2. Synchronous File Handling</h2>
    <p>Synchronous file operations block the program’s execution until the operation completes. Below are the examples for synchronous file handling:</p>

    <h3 id="write-to-a-file">Write to a file</h3>
    <pre><code>const fs = require('fs');
fs.writeFileSync('./test.txt', 'Hello Node.js!');</code></pre>
    <p>This writes the text <code>"Hello Node.js!"</code> into <code>test.txt</code> synchronously.</p>

    <h3 id="read-from-a-file">Read from a file</h3>
    <pre><code>const result = fs.readFileSync('./test.txt', 'utf8');
console.log(result);</code></pre>
    <p>This reads the content of <code>test.txt</code> synchronously and logs it to the console.</p>

    <h3 id="append-to-a-file">Append to a file</h3>
    <pre><code>fs.appendFileSync('./test.txt', '\n' + new Date().toLocaleString());</code></pre>
    <p>This appends the current date and time to <code>test.txt</code>.</p>

    <h3 id="copy-a-file">Copy a file</h3>
    <pre><code>fs.cpSync('./test.txt', './backup-test.txt');
console.log('File copied to backup-test.txt (sync)');</code></pre>
    <p>This copies the contents of <code>test.txt</code> to <code>backup-test.txt</code> synchronously.</p>

    <h3 id="delete-a-file">Delete a file</h3>
    <pre><code>fs.unlinkSync('./backup-test.txt');
console.log('backup-test.txt has been deleted (sync)');</code></pre>
    <p>This deletes <code>backup-test.txt</code> synchronously.</p>

    <h3 id="get-file-stats">Get file stats</h3>
    <pre><code>const stats = fs.statSync('./test.txt');
console.log('File stats:', stats);
console.log(`File size: ${stats.size} bytes`);
console.log(`Last modified: ${stats.mtime}`);</code></pre>
    <p>This retrieves information about <code>test.txt</code> such as size and last modification time.</p>

    <h2 id="3-asynchronous-file-handling">3. Asynchronous File Handling</h2>
    <p>Asynchronous file operations allow the program to continue executing other code while the file operation completes. Below are the examples for asynchronous file handling:</p>

    <h3 id="write-to-a-file-async">Write to a file (Async)</h3>
    <pre><code>fs.writeFile('./test.txt', 'Hello Node.js!', (err) => {
  if (err) throw err;
  console.log('File written successfully (async)');
});</code></pre>
    <p>This writes content to <code>test.txt</code> asynchronously.</p>

    <h3 id="read-from-a-file-async">Read from a file (Async)</h3>
    <pre><code>fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contents of test.txt:', data);
});</code></pre>
    <p>This reads the content of <code>test.txt</code> asynchronously and logs it to the console.</p>

    <hr>

    <h2>4. Conclusion</h2>

    <p>In this guide, we have explored both <strong>synchronous</strong> and <strong>asynchronous</strong> file handling in Node.js using the <code>fs</code> module. These basic operations help us interact with the file system and make applications that can manipulate files effectively.</p>
    <p>For more advanced topics like streaming data, directories, or error handling, refer to the <a href="https://nodejs.org/dist/latest-v16.x/docs/api/fs.html" target="_blank">Node.js official documentation</a>.</p>

    <hr>

    <h2>License</h2>
    
    <p>This repository is licensed under the MIT License. See the <code><a href="LICENSE" target="_blank">LICENSE</a></code> file for more information.</p>