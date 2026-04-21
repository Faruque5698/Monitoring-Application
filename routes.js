/**
 * Title: Routes
 * Description: write all routes here
 * Author: Faruque
 * Date: 15-04-2026
 */
// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { notFoundHandler } = require('./handlers/routeHandlers/notFoundHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');
// module scaffolding
const routes = {
    sample: sampleHandler,
    404: notFoundHandler,
    user: userHandler,
};

module.exports = routes;
