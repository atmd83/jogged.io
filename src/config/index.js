

const config = require('../../knexfile');
const env = (process.env.NODE_ENV == 'production') ? 'production' : 'development';
var pg = require('knex')(config[env]);

module.exports = {
    db: pg
}