/**
 * Title: Uptime Monitoring Application
 * Description: A simple uptime monitoring application to check the status of websites
 * Author: Ashaduzzaman Faruque
 * Date: 14-04-2026
 */

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const enviorment = require('./helpers/enviroment');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};
// testing file system
// @TODO remove this test code
// data.create('test', 'newFile', {name: "ashad", age: 30, city: "Dhaka",country: "Bangladesh"
// }, (err) => {
//   console.log('this was the error', err);
// });

// read data
data.read('test', 'newFile', (err, data2) => {
    console.log('this was the error', err);
    console.log('this was the data', data2);
});

// create a server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(enviorment.port, () => {
        console.log(`server enviorment variable ${process.env.NODE_ENV}`);
        console.log(`Server is listening on port ${enviorment.port}`);
    });
};

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
