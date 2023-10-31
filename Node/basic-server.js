// const http = require('http');

/* ==== Setting up a basic server ==== */
// Create server
// const server = http.createServer((req, res) => {
    // This will run on the server and will never get's log into the client browser
//     console.log('Request made');
// });

// Listen for requests
// server.listen(3000, 'localhost', () => {
//     console.log('Listening on port number: 3000');
// });

/* ==== Sending response from the server ==== */
// const server = http.createServer((req, res) => {
//     Set header Content type
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('Hello from the Server');
//     res.end();
// });

// server.listen(3000, 'localhost', () => {
//     console.log('Listening on port number: 3000');
// });

/* ==== Sending HTML as a response ==== */
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<p>Hello from the Server</p>');
//     res.end();
// });

// server.listen(3000, 'localhost', () => {
//     console.log('Listening on port number: 3000');
// });

/* ==== Sending HTML ideally ==== */
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     // Set header Content type
//     res.setHeader('Content-Type', 'text/html');
//     // Read the file(s)
//     fs.readFile('./views/index.html', (err, data) => {
//         if(err) {
//             console.log(err);
//             res.end();
//         } else {
//             res.write(data); // for sending many things
//             res.end();
//             // res.end(data); // for sending one thing
//         }
//     });
// });

// server.listen(3000, 'localhost', () => {
//     console.log('Listening on port number: 3000');
// });

/* ==== Basic Routing ==== */
const http = require('http');
const fs = require('fs');

// Create the Server
const server = http.createServer((req, res) => {
    // Set header Content type
    res.setHeader('Content-Type', 'text/html');

    // Routing
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
        // Re-direction: Re-directing the user to a specific path
        case '/about-me':
            res.statusCode = 301; // Setting the status code. 302: request moved to another destination.
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            res.end();
    }

    // Read the file(s)
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port number: 3000');
});

/* ==== Conclusion ==== */
// The last codebase is OK and it is working, but it's not the ideal way to handle requests and give back responses from the server with this raw "node". Because if the application grows, it'll will become a little bit messy to handle these URLs and responding back. So there is a third party package named "Express" which handles these things in a much better way!