var config = require('./config.js'),
mongoose = require('mongoose');

module.exports = function(){
  var db = mongoose.connect(config.db);

  require('../app/models/user.server.model.js');

  return db;
};
