const crypto = require('crypto');

const utilites = {};

// parse json to obejct
utilites.parseJsonToObject = (jsonStr) => {
    let output = {};
    try {
        output = JSON.parse(jsonStr);
    } catch (err) {
        output = {};
    }

    return output;
};

utilites.hash = (password) => {
    if (typeof password === 'string' && password.length > 0) {
        const hash = crypto.createHmac('sha256', 'thisIsASecret').update(password).digest('hex');
        return hash;
    }
    return false;
};

module.exports = utilites;
