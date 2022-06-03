const { Router } = require('express');
const { theaterController } = require('../controllers/theaterController');
const theaterRouter = new Router();

theaterRouter.get('/:movieId/:date', theaterController.getTheatersByMovieIdDate);
module.exports = { theaterRouter };