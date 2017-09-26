'use strict';

module.exports = {
  // Server IP
  ip: process.env.IP,

  // Server port
  port: process.env.PORT,

  // mongo connecton opions
  mongo: {
    uri: process.env.MONGO_URI,
    options:{}
  },

  session_secret: process.env.SESSION_SECRET,

  //Seed database on startut
  seedDB: process.env.SEED_DB

};
