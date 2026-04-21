/**
 * Title: Routes
 * Description: write all routes here
 * Author: Faruque
 * Date: 15-04-2026
 */
// dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler');
const {notFoundHandler} = require('./handlers/routeHandlers/notFoundHandler');
// module scaffolding
const routes = {
    '': sampleHandler,
    'sample': sampleHandler,
    '404': notFoundHandler

};

module.exports = routes;
