const dbConfig = require('../config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url
db.board = require('./boards')(mongoose);

module.exports = db;