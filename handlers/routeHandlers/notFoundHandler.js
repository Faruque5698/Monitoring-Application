/**
 * Title: Not found handler
 * Description: Handler for routes that are not found
 * Author: Faruque
 * Date: 15-04-2026
 */
// module scaffolding
const handler = {};
// not found handler
handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, { message: 'Not Found' });
};

module.exports = handler;
