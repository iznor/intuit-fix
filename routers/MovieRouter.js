const { Router } = require('express');
const { movieController } = require('../controllers/movieController');
const movieRouter = new Router();

movieRouter.get('/:theaterId/:date', movieController.getMoviesByTheaterIdDate);
module.exports = { movieRouter };