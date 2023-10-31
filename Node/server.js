// Setting a basice 'Web Server'
/* Server: server, network computer, computer program, or device that processes 
requests from a client (see client-server architecture). 
On the World Wide Web, for example, a Web server is a computer that uses 
the HTTP protocol to send Web pages to a client's computer when the 
client requests them. */

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';

// set port number manually
// const port = 3000;
// console.log(port);

// print port number by processing the "dotenv" package
// console.log(`Your port is: ${process.env.PORT}`); // output: undefined

// dotenv package will process the .env file and it's config function to look for the env file to find "port number"
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
// OR also setting a default fort: const port = process.env.PORT || 3000;
// console.log(`Your port is: ${port}`); // output: 8626

const server = http.createServer((req, res) => {

    // requets object
    console.log(req.url, req.method);

    // response object (sending the response to the browser) - three steps
    // step-I - set the response header content
    // res.setHeader('Content-Type', 'text/plain'); 
    // text/plain - sending back some plain text
    // text/html - sending back some html
    res.setHeader('Content-Type', 'text/html');

    // step-II - write to the server
    // use write() method to write to the response
    // res.write('Hello from Server!');

    // step-III - end the response
    // res.end();

    /* ==== Sending HTML ==== */
    // First set the header to "text/html"
    // res.write('<p>Hello from the Server</p>');

    // Basic Routing
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port} and listening for requests`);
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

/* ==== setHeader() ==== */ // (meat data about the request)
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