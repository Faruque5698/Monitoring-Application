/**
 * Title: sample route handler
 * Description: sample route handler
 * Author: Faruque
 * Date: 15-04-2026
 */
// module scaffolding
const handler = {};

// sample handler
handler.sampleHandler = (requestProperties, callback) => {
    callback(200, { message: 'This is a sample response' });
};

module.exports = handler;
