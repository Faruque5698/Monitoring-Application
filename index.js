/**
 * Title: Uptime Monitoring Application
 * Description: A simple uptime monitoring application to check the status of websites
 * Author: Ashaduzzaman Faruque
 * Date: 14-04-2026
 */

// Dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create a server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server is listening on port ${app.config.port}`);
    });
};

// handle request response
app.handleReqRes = (req, res) => {
    // request handling
    res.end(`Hello World! My name is Ashaduzzaman Faruque.`);
};

// start the server
app.createServer();
