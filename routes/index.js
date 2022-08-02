//Here we are collecting the packaged group of API endpoints and prefixing them with the path /api ** for server.js to use **
const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);


//This is so that if we make a request to any endpoint that doesn't exist, we will receive a 404 error indicating we have requested an incorrect resource (this is another good RESTful API practice). 
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;