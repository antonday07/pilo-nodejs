const dbConfig = require('../config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url
db.board = require('./boards')(mongoose);
db.workspace = require('./workspace')(mongoose);
db.user = require('./users')(mongoose);

module.exports = db;