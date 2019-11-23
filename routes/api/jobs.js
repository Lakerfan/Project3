const router = require('express').Router();
const jobsController = require('../../controllers/jobsController');

router.route('/')
    .get(jobsController.findAll)
    .post(jobsController.create);

router
    .route('/:id')
    .get(jobsController.findById)
    .put(jobsController.update)
    .delete(jobsController.remove);

module.exports = router;