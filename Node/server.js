// Setting a basice 'Web Server'
/* Server: server, network computer, computer program, or device that processes 
requests from a client (see client-server architecture). 
On the World Wide Web, for example, a Web server is a computer that uses 
the HTTP protocol to send Web pages to a client's computer when the 
client requests them. */

const http = require('http');

const hostname = '127.0.0.1';
// const port = 3000;

console.log(`Your port is: ${process.env.PORT}`); // undefined

// dotenv package will process the .env file and
// it's config function look for the env file
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
// const port = process.env.PORT || 3000; // OR
console.log(`Your port is: ${port}`); // 8626

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Contnet-Type', 'text/plain'); // text/html
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

/* ==== Code Explanation ==== */
/* This code first includes the Node.js http module.

The createServer() method of http creates a new HTTP server and returns it.

The server is set to listen on the specified port and host name. 
When the server is ready, the callback function is called, in this case informing 
us that the server is running. 

Whenever a new request is received, the request event is called, providing two objects: 
a request (an http.IncomingMessage object) and 
a response (an http.ServerResponse object).

Those 2 objects are essential to handle the HTTP call.

The first provides the request details. In this simple example, this is not used, 
but you could access the request headers and request data.

The second is used to return data to the caller.

In this case with: res.statusCode = 200;
we set the statusCode property to 200, to indicate a successful response.

response.setHeader(name, value);
We set the Content-Type header: res.setHeader('Content-type', 'text/plain');

and we close the response, adding the content as an argument to end():
res.end('Hello World\n'); */

/* ==== setHeader() ==== */
/* The response.setHeader(name, value) (Added in v0.4.0) method is an inbuilt application 
programming interface of the ‘http‘ module which sets a single header value for 
implicit headers. If this header already exists in the to-be-sent headers, 
its value will be replaced. Use an array of strings here to send multiple headers 
with the same name. Non-string values will be stored without modification. 
Therefore, response.getHeader() may return non-string values. However, 
the non-string values will be converted to strings for network transmission. 
NOTE: It does not return any value, instead sets a header. 
Examples: 
 Setting up headers
I) response.setHeader('Content-Type', 'text/html'); // set as a string
I) response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']); // set as an Array

 Checking and printing headers
 console.log("When Header is set a string:", response.getHeader('Content-Type'));
  console.log("When Header is set an Array:", response.getHeader('Set-Cookie'));
*/