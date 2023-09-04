const {
    createConnection
} = require('mysql');

const connectionParamsCore = {
    host: process.env.AURORA_LEGACY_SERVICE_DB_HOST,
    user: process.env.ATAPI_DB_USERNAME,
    password: process.env.ATAPI_DB_PASSWORD,
    port: process.env.ATAPI_DB_PORT,
    database: process.env.RALALIWEB_DB_NAME,
    multipleStatements: true
};
const connectDbCore = () => {
    const conn = createConnection(connectionParamsCore);
    return new Promise((resolve, reject) => {
        conn.connect((err) => {
            if (err) reject(err);
            resolve(conn);
        });
    });
};

const connectionParamsAuthService = {
    host: process.env.AURORA_NEW_SERVICE_DB_HOST,
    user: process.env.ATAPI_DB_USERNAME,
    password: process.env.ATAPI_DB_PASSWORD,
    port: process.env.ATAPI_DB_PORT,
    database: process.env.RALALIAUTHSERVICE_DB_NAME,
    multipleStatements: true
};
const connectDbAuthService = () => {
    const conn = createConnection(connectionParamsAuthService);
    return new Promise((resolve, reject) => {
        conn.connect((err) => {
            if (err) reject(err);
            resolve(conn);
        });
    });
};

const executeSql = (conn, sql) =>
    new Promise((resolve, reject) => {
        conn.query(sql, (error, result) => {
            if (error) reject(error);

            resolve(result);
        });
    });

const closeDb = (conn) => conn.end();

module.exports = {
    connectDbCore,
    connectDbAuthService,
    closeDb,
    executeSql
};