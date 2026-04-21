// dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const lib = {};

// base directory of the data folder
lib.baseDir = path.join(__dirname, '/../.data/');

// write data to a file
lib.create = (dir, file, data, callback) => {
    const directory = `${lib.baseDir + dir}`;

    // Ensure data directory exists before trying to create the file.
    fs.mkdir(directory, { recursive: true }, (mkdirErr) => {
        if (mkdirErr) {
            callback('Could not create directory for new file');
            return;
        }

        // open file for writing
        fs.open(`${directory}/${file}.json`, 'wx', (err, fileDescriptor) => {
            if (!err && fileDescriptor) {
                // convert data to string
                const stringData = JSON.stringify(data);
                // write data to file
                fs.writeFile(fileDescriptor, stringData, (err2) => {
                    if (!err2) {
                        fs.close(fileDescriptor, (err3) => {
                            if (!err3) {
                                callback(false);
                            } else {
                                callback('Error closing new file');
                            }
                        });
                    } else {
                        callback('Error writing to new file');
                    }
                });
                return;
            }

            if (err && err.code === 'EEXIST') {
                callback('Could not create new file, file already exists');
            } else {
                callback('Could not create new file');
            }
        });
    });
};

module.exports = lib;
