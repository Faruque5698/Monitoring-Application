/**
 * Title: Handle Request Response
 * Description: Handle Request Response
 * Author: Faruque
 * Date: 15-04-2026
 */
// Dependencies
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');
const { parseJsonToObject } = require('./utilities');

// module scaffolding
const handler = {};
handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // method get, post, put, delete
    const method = req.method.toLowerCase();
    // parameters or query string
    const queryStringObject = Object.fromEntries(parsedUrl.searchParams);
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
    // request body data
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end(); // string
        requestProperties.body = parseJsonToObject(realData); // parse to object
        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};
            const payloadString = JSON.stringify(payload);
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
        });
    });

    // request handler logic
};

module.exports = handler;
