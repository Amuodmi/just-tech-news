//this folder collects the endpoints and prefixes them 

const router = require('express').Router();

const userRoutes = require('./just-tech-news/router/user-routes.js');

router.use('/users', userRoutes);

module.exports = router;