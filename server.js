const express = require('express');
const routes = require('./routes');

//importing the connection to Sequelize 
const sequelize = require ('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//turn on routes
app.use(routes);

//turn on connection to db and server
//this method establishes the connection to the database. 
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});


//the "sync" part means that Sequelize is taking the models and connecting them to the associated databases tables. If it doesn't find a table, it will make one for you. 

//{force: false}  if it were set to true, it would drop and re-create all of the database tables on start-up. 