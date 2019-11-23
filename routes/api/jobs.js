const router = require('express').Router();
const jobsController = require('../../controllers/jobsController');

router.route('/')
    .get(jobsController.findAll)
    .post(jobsController.create);

module.exports = router;