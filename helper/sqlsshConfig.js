const mysql = require('mysql2');
var Client = require('ssh2').Client;
var sshClient = new Client();

const tunnelConfig = {
    host: process.env.RALALI_SSH_HOST,
    port: process.env.RALALI_SSH_PORT,
    username: process.env.RALALI_SSH_USERNAME,
    privateKey: require('fs').readFileSync(process.env.RALALI_SSH_PRIVATE_KEY, 'utf-8')
};

const connectionParamsCore = {
    host: process.env.AURORA_LEGACY_SERVICE_DB_HOST,
    user: process.env.ATAPI_DB_USERNAME,
    password: process.env.ATAPI_DB_PASSWORD,
    port: process.env.ATAPI_DB_PORT,
    database: process.env.RALALIWEB_DB_NAME,
    multipleStatements: true
};
const forwardConfigCore = {
    srcHost: process.env.RALALI_FORWARD_CONFIG_HOST,
    srcPort: process.env.RALALI_FORWARD_CONFIG_PORT,
    dstHost: connectionParamsCore.host,
    dstPort: connectionParamsCore.port
};
const connectDbCore = () => {
    return new Promise((resolve, reject) => {
        sshClient.on('ready', () => {
            sshClient.forwardOut(
                forwardConfigCore.srcHost,
                forwardConfigCore.srcPort,
                forwardConfigCore.dstHost,
                forwardConfigCore.dstPort,
                (err, stream) => {
                    if (err) reject(err);
                    // create a new DB server object including stream
                    const updatedDbServer = {
                        ...connectionParamsCore,
                        stream
                    };
                    // connect to mysql
                    const connection = mysql.createConnection(updatedDbServer);
                    // check for successful connection
                    // resolve or reject the Promise accordingly
                    connection.connect((error) => {
                        if (error) {
                            reject(error);
                        }
                        resolve(connection);
                    });
                });
        }).connect(tunnelConfig);
    });
};

const connectionParamsAuthService = {
    host: process.env.AURORA_NEW_SERVICE_DB_HOST,
    user: process.env.ATAPI_DB_USERNAME,
    password: process.env.ATAPI_DB_PASSWORD,
    port: process.env.ATAPI_DB_PORT,
    database: process.env.RALALIAUTHSERVICE_DB_NAME,
    multipleStatements: true,
    supportBigNumbers: true,
    bigNumberStrings: true
};
const forwardConfigAuthService = {
    srcHost: process.env.RALALI_FORWARD_CONFIG_HOST,
    srcPort: process.env.RALALI_FORWARD_CONFIG_PORT,
    dstHost: connectionParamsAuthService.host,
    dstPort: connectionParamsAuthService.port
};
const connectDbAuthService = () => {
    return new Promise((resolve, reject) => {
        sshClient.on('ready', () => {
            sshClient.forwardOut(
                forwardConfigAuthService.srcHost,
                forwardConfigAuthService.srcPort,
                forwardConfigAuthService.dstHost,
                forwardConfigAuthService.dstPort,
                (err, stream) => {
                    if (err) reject(err);
                    // create a new DB server object including stream
                    const updatedDbServer = {
                        ...connectionParamsAuthService,
                        stream
                    };
                    // connect to mysql
                    const connection = mysql.createConnection(updatedDbServer);
                    // check for successful connection
                    // resolve or reject the Promise accordingly
                    connection.connect((error) => {
                        if (error) {
                            reject(error);
                        }
                        resolve(connection);
                    });
                });
        }).connect(tunnelConfig);
    });
};

const executeSql = (SSHConnection, sql) =>
    new Promise((resolve, reject) => {
        SSHConnection.query(sql, (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });

const closeDb = (SSHConnection) => SSHConnection.end();

module.exports = {
    connectDbCore,
    connectDbAuthService,
    executeSql,
    closeDb
};