//this folder collects the endpoints and prefixes them 

const router = require('express').Router();

const userRoutes = require('./routes/user-routes')

router.use('/users', userRoutes);

module.exports = router;