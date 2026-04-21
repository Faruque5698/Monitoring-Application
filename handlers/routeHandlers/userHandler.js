// dependencies
const data = require('../../lib/data');
const { hash } = require('../../helpers/utilities');

// module scaffolding
const handler = {};

// User handler
handler.userHandler = (requestProperties, callback) => {
    const acceptMethods = ['get', 'post', 'put', 'delete'];
    const { method } = requestProperties;
    if (acceptMethods.indexOf(method) > -1) {
        handler._users[method](requestProperties, callback);
    } else {
        callback(405);
    }
    console.log(method);
};

handler._users = {};

handler._users.post = (requestProperties, callback) => {
    console.log(requestProperties.body);
    const firstName =
        typeof requestProperties.body.firstName === 'string' &&
        requestProperties.body.firstName.trim().length > 0
            ? requestProperties.body.firstName
            : false;
    const lastName =
        typeof requestProperties.body.lastName === 'string' &&
        requestProperties.body.lastName.trim().length > 0
            ? requestProperties.body.lastName
            : false;
    const phone =
        typeof requestProperties.body.phone === 'string' &&
        requestProperties.body.phone.trim().length === 11
            ? requestProperties.body.phone
            : false;
    const password =
        typeof requestProperties.body.password === 'string' &&
        requestProperties.body.password.trim().length > 0
            ? requestProperties.body.password
            : false;
    const tosAgreement = !!(
        typeof requestProperties.body.tosAgreement === 'boolean' &&
        requestProperties.body.tosAgreement === true
    );

    const errors = {};

    if (!firstName) {
        errors.firstName = 'First name is required';
    }

    if (!lastName) {
        errors.lastName = 'Last name is required';
    }

    if (!phone) {
        errors.phone = 'Phone must be exactly 11 digits';
    }

    if (!password) {
        errors.password = 'Password is required';
    }

    if (!tosAgreement) {
        errors.tosAgreement = 'Terms and conditions must be accepted';
    }

    if (firstName && lastName && phone && password && tosAgreement) {
        // make sure that the user doesnot allready exists
        data.read('users', phone, (err) => {
            if (err) {
                const userObject = {
                    firstName,
                    lastName,
                    phone,
                    password: hash(password),
                    tosAgreement,
                };
                // store the user to db
                data.create('users', phone, userObject, (err2) => {
                    if (!err2) {
                        callback(200, {
                            message: 'User was created successfully',
                        });
                    } else {
                        callback(500, {
                            error: 'Could not create the user',
                        });
                    }
                });
            } else {
                callback(500, {
                    error: 'A user with that phone number already exists',
                });
            }
        });
    } else {
        callback(400, {
            error: errors,
        });
    }
};

handler._users.get = (requestProperties, callback) => {
    callback(200, {
        name: 'Ashaduzzaman Faruque',
        age: 30,
        profession: 'Software Engineer',
    });
};

handler._users.put = (requestProperties, callback) => {};

handler._users.delete = (requestProperties, callback) => {};

// export the module
module.exports = handler;
