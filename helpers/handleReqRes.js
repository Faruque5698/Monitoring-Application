/**
 * Title: Handle Request Response
 * Description: Handle Request Response
 * Author: Faruque
 * Date: 15-04-2026
 */
// Dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../routes');
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandler');

// module scaffolding
const handler = {};
handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // method get, post, put, delete
    const method = req.method.toLowerCase();
    // parameters or query string
    const queryStringObject = parsedUrl.query;
    // headers object
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
        payload = typeof(payload) === 'object' ? payload : {};
        const payloadString = JSON.stringify(payload);
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(statusCode);
        res.end(payloadString);
    });
    // request body data
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => { 
        realData += decoder.end();
        console.log('decoded data: ', realData);
        res.end(`Hello World! My name is Ashaduzzaman Faruque.`);
    });

    // request handler logic
};

module.exports = handler;
