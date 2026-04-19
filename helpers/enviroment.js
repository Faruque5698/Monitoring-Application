// dependencies

// module scaffolding
const enviorments = {};

enviorments.staging = {
    port: 3000,
    envName: 'staging',
};

enviorments.production = {
    port: 5000,
    envName: 'production',
};
// determine which env was passed as a command-line argument
const currentEnv = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding env
const enviormentToExport = typeof enviorments[currentEnv] === 'object' 
  ? enviorments[currentEnv] 
  : enviorments.staging;


module.exports = enviormentToExport;
