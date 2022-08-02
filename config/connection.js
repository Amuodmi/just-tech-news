//import the Sequelize constructor from the library 

const Sequelize = require('sequelize');


require('dotenv').config();

//create connection to our database, pass in your mySQL information for username and password

//the new Sequelize function accepts the database name, mySQL username, and password, and passes configuration settings. 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

//exporting the above connection 
module.exports = sequelize; 