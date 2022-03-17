const { Sequelize } = require('sequelize');
const config = require('./books-connection-config');

// Step 3 couldn't happen without this
const connection = new Sequelize(
  `mysql://${config.userName}:${config.password}@localhost:3306/${config.database}`,
  {
    // logging: false,
    // Default for all Models, saves us some typing
    define: {
      timestamps: false,
      underscored: true,
    },
  }
);

module.exports = connection;
